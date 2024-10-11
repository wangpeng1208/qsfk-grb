<template>
    <div class="Modal">
        <div class="colLeft">
            <div class="Nav">
                <div class="trees-coadd">
                    <div class="scollhide">
                        <div :class="isPage ? 'tree' : 'isTree'">
                            <t-tree ref="tree" :data="treeData" value-mode="all" :keys="{
                            label: 'name',
                            value: 'id',
                            children: 'children',
                        }" activable transition>
                                <template #label="{ node }">
                                    <div class="nodes" @click="appendBtn(node.data.id)">
                                        <span class="file-name">
                                            <img src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB1SURBVCiR7dI9DQJBEAbQt3sG+FkEIQUHWEABOQdYoLj+JCABAZCsg6EnHOSWhIop58vLN8XwxaQ4OWL/tL8I27RTP+GYyK4YJ7IqnFMMJWzKrHPB7V6z1XI+hLJeZF3XhpGb5R//FEfNwoF4+8Ovberbi/EAxP8Z/kc4LR4AAAAASUVORK5CYII="
                                                class="icon">
                                            <span class="name line1">{{ node.label }}</span>
                                        </span>

                                        <t-dropdown v-if="node.data.id" :options="clickMenuOptions"
                                            @click="data => clickMenu(data, node.data)">
                                            <t-icon name="ellipsis" size="16" />
                                        </t-dropdown>
                                        <t-link v-else theme="default" size="small" @click="append(node.data, 'add')"
                                            variant="text" class="add">添加</t-link>
                                    </div>
                                </template>
                            </t-tree>
                        </div>
                    </div>
                </div>
            </div>
            <div class="conter">
                <div class="bnt acea-row row-middle df-jcsb" style="display:flex;">
                    <div class="" style="flex:1;">
                        <t-space>
                            <t-button theme="primary" :disabled="checkPicList.length === 0" @click="checkPics"
                                v-if="isShow !== 0">使用选中图片</t-button>
                            <uploadImg app="admin" :data="{
                            type: 'image',
                            cate_id: cateId,
                        }" @update="uploadSuccess" />

                            <t-button theme="default" class="mr10" :disabled="!checkPicList.length && !ids.length"
                                @click="editPicList()">删除图片</t-button>
                        </t-space>
                    </div>
                    <div v-if="isPage" style="display:flex;">
                        <t-input class="mr10" v-model="fileData.name" placeholder="请输入图片名" size="small"
                            style="width: 150px">
                            <template #suffixIcon>
                                <search-icon :style="{ cursor: 'pointer' }" @click="getFileList" />
                            </template>
                        </t-input>
                    </div>
                </div>
                <div class="pictrueList acea-row" :class="{ 'is-modal': !isPage }">
                    <div style="width: 100%">
                        <div v-if="isShowPic" class="imagesNo">
                            <i class="t-icon-picture" style="color: #dbdbdb; font-size: 60px"></i>
                            <span class="imagesNo_sp">图片库为空</span>
                        </div>
                        <div v-else class="acea-row mb10 ">
                            <div class="pictrueList_pic mb10 mt10" v-for="(item, index) in pictrueList" :key="index"
                                :style="{ margin: picmargin }" @mouseenter="enterMouse(item)"
                                @mouseleave="enterLeave(item)">
                                <p class="number" v-if="item.num > 0">
                                    <t-badge :count="item.num" :offset="[10, 20]" color="#0052D9">
                                        <a href="#" class="demo-badge"></a>
                                    </t-badge>
                                </p>
                                <div class="img" :class="item.isSelect ? 'on' : ''">
                                    <img :src="item.url" @click="changImage(item)" style="" />
                                </div>
                                <div class="operate-item">
                                    <p v-if="!item.isEdit"  style="max-width: 100px;">
                                        {{ item.name }}
                                    </p>
                                    <t-input size="small" type="text" v-model="item.name" v-else
                                        @blur="bindTxt(item)" />
                                    <div class="operate-height">
                                        <t-space>
                                            <span class="operate mr10" @click="editPicList(item.id)"
                                                v-if="item.isShowEdit">删除</span>
                                            <span class="operate mr10" @click="item.isEdit = !item.isEdit"
                                                v-if="item.isShowEdit">改名</span>
                                            <t-image-viewer v-model:visible="lookImgView" :images="currentPicList"
                                                :default-index="lookImgIndex">
                                                <template #trigger>
                                                    <span class="operate" @click="lookImg(item)"
                                                        :images="currentPicList" :index="index"
                                                        v-if="item.isShowEdit">查看</span>
                                                </template>
                                            </t-image-viewer>
                                        </t-space>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer acea-row row-right">
                    <t-pagination v-if="pagination.total > pagination.defaultPageSize"
                        v-model="pagination.defaultCurrent" v-model:pageSize="pagination.defaultPageSize"
                        :total="pagination.total" :show-page-size="false" :total-content="false"
                        style="margin-top: 10px" @current-change="getFileList" />
                </div>
            </div>
        </div>
        <div class="images" v-show="false">
            <img v-for="src in pictrueList" :src="src.att_dir" :key="src.id" />
        </div>
        <!-- 新建/编辑分类 -->
        <t-dialog v-model:visible="listDialogVisible" :close-on-overlay-click="false" :destroy-on-close="true"
            :header="listDialogTitle" :on-confirm="onListSubmit">
            <t-form ref="formRef" label-align="left" :data="listFormData" :rules="FORM_RULES" :label-width="80">
                <t-form-item label="上级分类" name="pid">
                    <t-tree-select v-model="listFormData.pid" placeholder="请选择上级分类" :data="treeData" clearable
                        filterable check-strictly :min-collapsed-num="2" :keys="{
                            label: 'name',
                            value: 'id',
                            children: 'children',
                        }" />
                </t-form-item>
                <t-form-item label="分类名称" name="name">
                    <t-input v-model="listFormData.name" clearable placeholder="请输入角色名" />
                </t-form-item>
            </t-form>
        </t-dialog>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { SearchIcon } from 'tdesign-icons-vue-next';
import { FormRule, MessagePlugin, DropdownProps } from 'tdesign-vue-next';
import {
    getCategoryListApi,
    createApi,
    fileListApi,
    categoryEditApi,
    moveApi,
    fileUpdateApi,
} from '@/api/admin/common/uploadPictures';
import { modalSure } from '@/utils/common';
import uploadImg from './upload.vue';

const props = defineProps({
    isChoice: {
        type: String,
        default: '',
    },
    isPage: {
        type: Boolean,
        default: false,
    },
    isShow: {
        type: Number,
        default: 1,
    },
    pageLimit: {
        type: Number,
        default: 0,
    },
    maxlength: {
        type: Number,
        default: 1,
    },
});

const treeData = ref([]);
const treeData2 = ref([]);
const pictrueList = ref([]);
const checkPicList = ref([]);
const uploadName = ref({
    name: '',
    all: 1,
});
const FromData = ref(null);
const cateId = ref(0);
const fileData = ref({
    pid: 0,
    name: '',
    page: 1,
    limit: props.pageLimit || 18,
});
const pids = ref(0);
const list = ref([]);
const isShowPic = ref(false);
const header = ref({});
const ids = ref([]); // 选中附件的id集合
const lietStyle = ref('list');
const multipleSelection = ref([]);
const picmargin = ref('5px'); //默认距离右边距离

onMounted(() => {
    getList();
    // getFileList();
})

const radioChange = () => {
    initData();
};

// 分类列表树
const getList = async (type = '') => {
    let data = {
        name: '全部图片',
        id: 0,
        pid: 0,
    };
    const res = await getCategoryListApi(uploadName.value);

    if (type !== 'search') {
        treeData2.value = JSON.parse(JSON.stringify([...res.data.list]));
    }
    res.data.list.unshift(data);
    treeData.value = res.data.list;
}

// 点击菜单
const clickMenuOptions: DropdownProps['options'] = [
    { content: '新增分类', value: 1 },
    { content: '编辑分类', value: 2 },
    { content: '删除', value: 3 },
];
const clickMenu: DropdownProps['onClick'] = (data, node) => {
    if (data.value == 1) {
        append(node, 'add');
    } else if (data.value == 2) {
        append(node, 'edit');
    } else if (data.value == 3) {
        remove(node);
    }
};
const listDialogVisible = ref(false);
const listDialogTitle = ref('');
// 新建/编辑分类
const append = (data: any, type: any) => {
    listDialogVisible.value = true;
    if (type === 'edit') {

        listFormData.value.id = data.id;
        listFormData.value.pid = data.pid;
        listFormData.value.name = data.name;
        listDialogTitle.value = '编辑分类';
    } else {
        listFormData.value.pid = data.id;
        listFormData.value.name = '';
        listDialogTitle.value = '新建分类';
    }
};
// 删除分类
const remove = (data: any) => {
    let delfromData = {
        title: '删除分类',
        url: `/adminapi/upload/deleteCategory`,
        ids: {
            ids: data.id,
        },
    };
    modalSure(delfromData)
        .then((res) => {
            MessagePlugin.success((res as { msg: string }).msg);
            getList();
        })
        .catch((res) => {
            MessagePlugin.error(res.msg);
        });
};
const listFormData = ref({
    id: 0,
    pid: 0,
    name: '',
});
// 新建分类表单
const FORM_RULES: Record<string, FormRule[]> = {
    name: [{ required: true, message: '请输入分类名称', trigger: 'blur' }],
};
const onListSubmit = async () => {
    const res = cateId.value ? await categoryEditApi(listFormData.value) : await createApi(listFormData.value);
    if (res.code) {
        MessagePlugin.success(res.msg);
        listDialogVisible.value = false;
        getList();
    } else {
        MessagePlugin.error(res.msg);
    }
}

// 上传成功
const uploadSuccess = () => {
    pagination.value.defaultCurrent = 1;
    initData();
    getFileList();
};

// enterMouse
const enterMouse = (item: any) => {
    item.isShowEdit = !item.isShowEdit;
    item.realName = !item.realName;
};
const enterLeave = (item: any) => {
    item.isShowEdit = !item.isShowEdit;
};

const moveImg = (status: any) => {
    if (!status) {
        getMove();
    } else {
        if (!ids.value.toString()) {
            MessagePlugin.warning('请先选择图片');
            return;
        }
    }
};
// 移动分类
const getMove = () => {
    let data = {
        pid: pids.value,
        images: ids.value.toString(),
    };
    if (!data.images) return;
    moveApi(data)
        .then(async (res) => {
            MessagePlugin.success(res.msg);
            getFileList();
            pids.value = 0;
            checkPicList.value = [];
            ids.value = [];
        })
        .catch((res) => {
            MessagePlugin.error(res.msg);
        });
};

// 删除图片
const editPicList = (id: any = '') => {
    let delfromData = {
        title: '删除选中图片',
        url: `/adminapi/upload/delete`,
        ids: {
            ids: id || ids.value.toString(),
        },
    };
    modalSure(delfromData)
        .then((res) => {
            MessagePlugin.success((res as { msg: string }).msg);
            getFileList();
            initData();
        })
        .catch((res) => {
            MessagePlugin.error(res.msg);
        });
};
// initData
const initData = () => {
    checkPicList.value = [];
    ids.value = [];
    multipleSelection.value = [];
};

const appendBtn = (id: number) => {
    cateId.value = id;
    pagination.value.defaultCurrent = 1;
    getFileList();
};

// 文件列表
// 本页图片列表 
const currentPicList = ref([]);

const pagination = ref({
    defaultPageSize: props.pageLimit || 12,
    total: 0,
    defaultCurrent: 1,
});
const getFileList = async () => {
    const page = {
        limit: pagination.value.defaultPageSize,
        page: pagination.value.defaultCurrent,
    };
    const pageParams = {
        ...fileData.value,
        ...page,
        cate_id: cateId.value,
    }
    const res = await fileListApi(pageParams);
    if (res.data.total) {
        isShowPic.value = false;
        res.data.list.forEach((el: any) => {
            el.isSelect = false;
            el.isEdit = false;
            el.isShowEdit = false;
            el.realName = false;
            el.num = 0;
            editName(el);
        });
        pictrueList.value = res.data.list;
        pagination.value.total = res.data.total;
        // currentPicList只要 res.data.list里的url组成格式['https://tdesign.gtimg.com/demo/demo-image-1.png']
        currentPicList.value = res.data.list.map((item: any) => item.url);
    } else {
        isShowPic.value = true;
    }
}
getFileList();
// 查看图片
const lookImgView = ref(false);
const lookImgIndex = ref(0);
const lookImg = (item: any) => {
    lookImgView.value = true;
    lookImgIndex.value = pictrueList.value.findIndex((el) => el.id === item.id);
};

// 关闭
const emit = defineEmits(['changeCancel', 'getPic', 'getPicD', 'dialogStatus']);
// 选中图片
const changImage = (item: any) => {
    let activeIndex = 0;
    if (!item.isSelect) {
        item.isSelect = true;
        checkPicList.value.push(item);
    } else {
        item.isSelect = false;
        checkPicList.value.map((el, index) => {
            if (el.id == item.id) {
                activeIndex = index;
            }
        });
        checkPicList.value.splice(activeIndex, 1);
    }

    ids.value = [];
    checkPicList.value.map((item, i) => {
        ids.value.push(item.id);
    });
    pictrueList.value.map((el, i) => {
        if (el.isSelect) {
            checkPicList.value.filter((el2, j) => {
                if (el.id == el2.id) {
                    el.num = j + 1;
                }
            });
        } else {
            el.num = 0;
        }
    });
}
// 点击使用选中图片
// const { maxlength } = toRefs(props);
const checkPics = () => {
    if (props.isChoice === '单选') {
        if (checkPicList.value.length > 1) return MessagePlugin.warning('最多只能选一张图片');
        emit('getPic', checkPicList.value[0]);
        emit('dialogStatus', false);
    } else {
        if (props.maxlength != undefined && checkPicList.value.length > Number(props.maxlength))
            return MessagePlugin.warning('最多只能选' + props.maxlength + '张图片');
        emit('getPic', checkPicList.value);
        emit('dialogStatus', false);
    }
}
const editName = (item: any) => {
    let it = item.name.split('.');
    let it1 = it[1] == undefined ? [] : it[1];
    let len = it[0].length + it1.length;
    item.editName = len < 10 ? item.name : item.name.substr(0, 4) + '...' + item.name.substr(-5, 5);
}
// 修改图片文字上传
const bindTxt = async (item: any) => {
    if (item.name == '') {
        MessagePlugin.error('请填写内容');
    }
    const res = await fileUpdateApi({
        id: item.id,
        name: item.name,
    });
    if (res.code) {
        editName(item);
        item.isEdit = false;
        MessagePlugin.success(res.msg);
    } else {
        MessagePlugin.error(res.msg);
    }
}
</script>

<style scoped lang="less">
@import url('./style.less');
</style>
<style lang="less">
.Modal {
    padding: 20px 0;
    height: 100%;
    background: #fff !important;

    .trees-coadd {
        text-align: center;
        width: 100%;
        border-radius: 4px;
        overflow: hidden;
        position: relative;

        nodes .tree_tit {
            font-size: 15px;
            color: #606266;
            font-weight: 500;
            padding: 10px 0 10px 20px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            cursor: pointer;
        }
    }
}



.nodes {
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
}

.file-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.icon {
    width: 15px;
    height: 13px;
    margin-right: 6px;
}
</style>