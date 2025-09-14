SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_log
-- ----------------------------
DROP TABLE IF EXISTS `admin_log`;
CREATE TABLE `admin_log`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ip` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '操作者IP地址',
  `params` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `username` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '操作人用户名',
  `action` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '操作行为',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '操作内容描述',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统操作日志表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_log
-- ----------------------------

-- ----------------------------
-- Table structure for admin_menu
-- ----------------------------
DROP TABLE IF EXISTS `admin_menu`;
CREATE TABLE `admin_menu`  (
  `id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `user_id` mediumint(9) NOT NULL,
  `menu_id` mediumint(20) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 74 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户快捷菜单' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_menu
-- ----------------------------
INSERT INTO `admin_menu` VALUES (49, 1, 66);
INSERT INTO `admin_menu` VALUES (55, 1, 50);
INSERT INTO `admin_menu` VALUES (56, 2, 203);
INSERT INTO `admin_menu` VALUES (57, 2, 204);
INSERT INTO `admin_menu` VALUES (58, 2, 172);
INSERT INTO `admin_menu` VALUES (61, 2, 209);
INSERT INTO `admin_menu` VALUES (68, 1, 11);
INSERT INTO `admin_menu` VALUES (71, 1, 14);
INSERT INTO `admin_menu` VALUES (72, 1, 12);
INSERT INTO `admin_menu` VALUES (73, 1, 13);

-- ----------------------------
-- Table structure for admin_role_relation
-- ----------------------------
DROP TABLE IF EXISTS `admin_role_relation`;
CREATE TABLE `admin_role_relation`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `role_id` int(11) NOT NULL COMMENT '角色id',
  `admin_id` int(11) NOT NULL COMMENT '管理员id',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `role_admin_id`(`role_id`, `admin_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '管理员角色表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_role_relation
-- ----------------------------
INSERT INTO `admin_role_relation` VALUES (1, 1, 1);
INSERT INTO `admin_role_relation` VALUES (26, 2, 2);

-- ----------------------------
-- Table structure for admin_roles
-- ----------------------------
DROP TABLE IF EXISTS `admin_roles`;
CREATE TABLE `admin_roles`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(80) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '角色组',
  `rules` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '权限',
  `created_at` datetime NOT NULL COMMENT '创建时间',
  `updated_at` datetime NOT NULL COMMENT '更新时间',
  `pid` int(10) UNSIGNED NULL DEFAULT NULL COMMENT '父级',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '管理员角色' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_roles
-- ----------------------------
INSERT INTO `admin_roles` VALUES (1, '超级管理员', '*', '2022-08-13 16:15:01', '2022-12-23 12:05:07', 0);

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `username` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `nickname` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '昵称',
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `avatar` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '/app/admin/avatar.png' COMMENT '头像',
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `mobile` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手机',
  `created_at` datetime NULL DEFAULT NULL COMMENT '创建时间',
  `updated_at` datetime NULL DEFAULT NULL COMMENT '更新时间',
  `login_at` datetime NULL DEFAULT NULL COMMENT '登录时间',
  `status` tinyint(4) NULL DEFAULT 1 COMMENT '禁用',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '管理员表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin_user
-- ----------------------------
INSERT INTO `admin_user` VALUES (1, 'admin', '超级管理员', '$2y$10$OMEvwr2qbTEVoHdvnlpfVuR8Wyrm.ELVAza9nHS6Zqo4MQHZqAoNG', 'https://demo.qqss.net/static/common/images/noavatar.png', '990504246@qq.com', '', '2023-04-29 17:09:09', '2024-02-18 15:16:51', '2024-02-18 15:16:51', 1);

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `cate_id` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '文章栏目',
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '文章标题',
  `title_img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '标题图',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章内容',
  `status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '文章状态',
  `views` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '浏览量',
  `create_at` int(10) UNSIGNED NOT NULL COMMENT '创建时间',
  `update_at` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '更新时间',
  `top` tinyint(1) NOT NULL DEFAULT 0 COMMENT '置顶',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '文章表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------

-- ----------------------------
-- Table structure for article_category
-- ----------------------------
DROP TABLE IF EXISTS `article_category`;
CREATE TABLE `article_category`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `pid` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '父ID',
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '名称',
  `alias` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '别名',
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '备注',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '状态',
  `create_at` int(10) UNSIGNED NOT NULL COMMENT '创建时间',
  `update_at` int(10) UNSIGNED NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '文章栏目表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_category
-- ----------------------------

-- ----------------------------
-- Table structure for channel
-- ----------------------------
DROP TABLE IF EXISTS `channel`;
CREATE TABLE `channel`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '通道ID',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '通道名称',
  `code` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '通道代码',
  `status` tinyint(1) UNSIGNED NOT NULL DEFAULT 0 COMMENT '状态 1 开启 0 关闭',
  `account_fields` varchar(1024) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '账户字段',
  `updatetime` int(11) UNSIGNED NOT NULL DEFAULT 0 COMMENT '更新时间',
  `show_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '前台展示名称',
  `is_available` tinyint(4) NOT NULL DEFAULT 0 COMMENT '接口可用 0通用 1手机 2电脑',
  `paytype` tinyint(4) NOT NULL,
  `sort` int(10) NOT NULL DEFAULT 0 COMMENT '渠道排序',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '支付网关' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of channel
-- ----------------------------

-- ----------------------------
-- Table structure for channel_account
-- ----------------------------
DROP TABLE IF EXISTS `channel_account`;
CREATE TABLE `channel_account`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `channel_id` int(10) UNSIGNED NOT NULL COMMENT '渠道ID',
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '账户名',
  `params` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '参数',
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '状态 1启用 0禁用',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of channel_account
-- ----------------------------

-- ----------------------------
-- Table structure for config
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config`  (
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '配置编码',
  `value` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '配置值',
  INDEX `index_system_config_name`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统参数配置' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of config
-- ----------------------------
INSERT INTO `config` VALUES ('site_name', '骑士寄售软件系统');
INSERT INTO `config` VALUES ('site_keywords', '虚拟产品寄售平台');
INSERT INTO `config` VALUES ('site_desc', '个人发卡系统源码演示站');
INSERT INTO `config` VALUES ('site_subtitle', '（演示站，请勿下单支付）专业的虚拟产品寄售平台');
INSERT INTO `config` VALUES ('site_info_tel', '15612341234');
INSERT INTO `config` VALUES ('site_info_qq', '123456');
INSERT INTO `config` VALUES ('site_info_email', '123456@163.com');
INSERT INTO `config` VALUES ('site_info_copyright', 'Copyright © <b>2023</b> 某某公司某某公司某某公司某某公司 All Rights Reserved<br/><a href=\"http://beian.miit.gov.cn\" target=\"_blank\" >豫ICP备2024064321号</a>');
INSERT INTO `config` VALUES ('site_domain', 'http://kp.yo0.cn');
INSERT INTO `config` VALUES ('site_wordfilter_status', '0');
INSERT INTO `config` VALUES ('site_logo', 'https://demo.qqss.net/upload/admin/1/image/20240508/663a61a30212.png');
INSERT INTO `config` VALUES ('merchant_logo', 'https://demo.qqss.net/upload/admin/1/image/20240505/66372afd23d6.png');
INSERT INTO `config` VALUES ('order_trade_no_profix', 'Dd');
INSERT INTO `config` VALUES ('merchant_logo_sm', 'https://demo.qqss.net/upload/admin/1/image/20240715/4d0bbbba507fe3f2eca89c69d5369a7b_66948bd24f493.png');
INSERT INTO `config` VALUES ('order_title_type', '0');
INSERT INTO `config` VALUES ('order_title_profix', '测试');
INSERT INTO `config` VALUES ('order_title_str', '');
INSERT INTO `config` VALUES ('order_query_blackcontact', '12345678|123456789|1234567890|a123456789|123456|qq123456|abc123456|123456789a|WOAINI1314|11111111|123123123|88888888|111111111|147258369|987654321|1111111111|1qaz2wsx|789456123|iloveyou|qwertyuiop|asdfghjkl|1q2w3e4r|123456abc|qazwsxedc|abcd1234|123654789|aa123456|123321123|1234qwer|123456aa|123456123|999999999|741852963|963852741|qwer1234|qweasdzxc|asd123456|123456qq|3.1415926|asdf1234|111222333|147852369|111111|123698745|woaiwojia|123456987|zxcvbnm123|5845201314|1q2w3e4r5t|buzhidao|xiaoxiao|qwe123456|1357924680|yangyang|135792468|AS123456|147896325|888888|123123|123321|a123456|zxcvbnm|123456a|aaaaaaaa|11223344|password|87654321|12344321|31415926|asdasdasd|12121212|12341234|a12345678|asdfasdf|qwertyui|520520520|q1w2e3r4|1234abcd|1qazxsw2|1123581321|123456asd|woaini123|woshishui|12301230|1234554321|12369874|25257758|369258147|zhang123|woainima|woaini520|5845211314|12345678910|jingjing|tiantian|584131421|5841314520|yuanyuan|woailaopo|584131420|5201314|666666|1234567|654321|789456|woaini|112233|1314520|7758521|123|1|123654|520520|147258|aaaaaa|222222|abc123|110110|1111111|5211314|qazwsx|7758258|qwerty|456123|159357|521521|123qwe|456789|1314521|987654|asdfgh|123abc|qweasd|asdasd|qwe123|zxcvbn|asd123|1234560|qaz123|q123456|abcdefg|A12345|123asd|z123456|qweqwe|w123456|caonima|zxc123|123456q|aaa111|00000000|66666666|qqqqqqqq|000000000|0000000000|0123456789|110110110|22222222|a1234567|11112222|521521521|123qweasd|11235813|5201314520|100200300|qazwsx123|wocaonima|q123456789|9876543210|qaz123456|123456QWE|20082008|qq123123|000000|WOJIUSHIWO|sunshine|wodemima|a5201314|zhangwei|110120119|123456789q|woaini521|dongdong|13141314|20080808|14789632|aini1314|zhanglei|worinima|qq5201314|zhangjie|wangyang|love1314|584201314|0|121212|111222|131313|999999|555666|333333|100200|555555|12345|7777777|qqqqqq|zzzzzz|1234|778899|666888|123789|777777|201314|101010|168168|159753|123000|314159|789789|963852|qazqaz|369369|ffffff|131420|584520|741852|456852|131421|111|135246|110119|147852|321321|753951|211314|518518|456456|444444|windows|123457|336699|1111|258369|654123|147369|1q2w3e|119119|321654|7758520|520530|112358|564335|911911|951753|110120|135790|102030|258258|shmily|232323|111000|369258|520025|121314|251314|dddddd|709394|123465|721521|3344520|wwwwww|584521|loveyou|521125|142536|1230123|ssssss|a|332211|120120|3344521|124578|fuckyou|aaa123|112112|mnbvcxz|xxxxxx|nihaoma|134679|521314|321456|a111111|7895123|852456|520123|weiwei|qwaszx|qazxsw|q1w2e3|zxczxc|111111a|baobao|a123123|99999999|123456123456|55555555|asdfghjk|12345678A|321321321|12345600|123456654321|0987654321|z123456789|12345679|123456aaa|1233211234567|321654987|zxc123456|computer|superman|goodluck|a123456a|12qwaszx|12345qwert|aptx4869|77585210|74108520|7894561230|abcd123456|mingming|shanghai|wangjian|www123456|7758521521|qq123456789|25251325|wangjing|110119120|1314520520|nicholas|5201314a|wobuzhidao|xiaoqiang|16897168|longlong|xiaolong|shanshan|110120130|5841314521|zhangjian|qwqwqw|0000000|888999|1314|7654321|11111|ww111111|246810|222333|445566|333666|FOREVER|hao123456|585858|121121|212121|aaaaaaa|wang123|111qqq|159951|147147|maomao|235689|159159|feifei|beyond|898989|7788250|5203344|555888|1234566|a000000|7788521|122333|123456.|jiajia|123123a|wangwei|258456|q123123|520|woaiwoziji|xiaoyu|zhendeaini|asasas|jiushiaini|000000a|ms0083jxj|33333333|qweqweqwe|ffffffff|1234567a|aaa123456|qwerasdf|299792458|123456789.|8888888888|52013145201314|888888888|abc12345|a123123123|123456..|12312312|a1b2c3d4|abc123456789|1a2b3c4d|123456ab|li123456|qq000000|qw123456|w123456789|1234512345|456456456|ab123456|Q1W2E3R4T5|19491001|zz123456|123qwe123|77585217758521|1234567890123|123456as|chenchen|q1234567|123456qaz|qwert12345|52013140|3141592653|qweasd123|52013141314|wang123456|asdf123456|123456798|1234567899|liu123456|123456789abc|123456qw|123456abcd|74107410|ddzj39cb3|zx123456|20092009|nihao123|lxqqqqqq|woainiwoaini|19861212|liangliang|123456789123|13145201314520|eladnbin1104|19861015|123456zxc|qwe123qwe|5201314123|zhangyan|123456...|llllll|yj2009|476730751|007007|0123456|010203|686868|wan0425|666999|989898|000111|777888|787878|888666|000123|999888|234567|abcdef|123567|168888|181818|565656|13|mm123456|131425|012345|556677|0000|11|998877|198512|gggggg|789123|mmmmmm|198611|158158|1234561|198411|142857|winner|qq00000|198511|456321|198612|1q1q1q|119911|131415|wangyut2|808080|10203|7007|1.23457E+11|1230|123520|tiancai|110|dragon|7788414|qq1234|5213344|1122334|123456z|55555|1230456|1231230|5121314|1314159|2597758|wanglei|7788520|198610|770880|aa5201314|caonima123|2525775|1122|1233210|134679852|1.23456E+11|michael|asdzxc|1234568|asd|1314258|1001|a123321|asdf123|s123456|ww123456|1234569|1.23457E+12|7758991|pppppp|@qq.com|qqq123|l123456|qwert123|0.123456|369852|qwertyu|abc1234567|1111111111111111|hao123|abcd123|tingting|dearbook|code8925|zzzzzzzz|77777777|xiazhili|88771024|11111111111111111111|wwwwwwww|10101010|12345678A@|44444444|1122334455|12345612|P@ssw0rd|csdncsdn|05962514787|ssssssss|lilylily|dddddddd|zxczxczxc|369369369|aaaaaaaaa|abcdefgh|123789456|19830209|168168168|helloworld|aaaaaaaaaa|112233445566|zaq12wsx|xxxxxxxx|ds760206|123321123321|789789789|qq111111|13145200|a1111111|google250|123321aa|007007007|66668888|csdn.net|aaaa1111|maidoumaidou|z3255500|01234567|21212121|00001111|12345687|12348765|01020304|23232323|qkvmlia569|passw0rd|77585211|01010101|a11111111|aa123123|mmmmmmmm|qazqazqaz|200919ab|qazxswedc|19841010|20102010|666666666|111111aa|19841020|00000000000000000000|19810914|123456000|10203040|123123123123|12345abcde|13801001020|meiyoumima|518518518|5200251314|hahahaha|13131313|fa1681688|llllllll|19851010|asasasas|012345678|77889900|newhappy|23456789|12365478|1111qqqq|wangpeng|z1234567|w1234567|dgdg7234322|qqqq1111|1234asdf|1234567b|951ljb753|45612300|justdoit|q1111111|11111111a|qqqqqqqqq|19841028|911911911|11110000|19841021|microsoft|258258258|123454321|987456321|qwqwqwqw|19841018|159159159|123123aa|jjjjjjjj|hhhhhhhh|pppppppp|q12345678|19841012|456789123|administrator|a0000000|admin123|lovelove|internet|a00000000|19841023|120120120|asd123123|kkkkkkkk|12131415|admin369|84131421|ybnkoia569|testtest|19851120|42011178|1qaz2wsx3edc|12332100|78787878|66778899|19871024|456123789|z12345678|123123456|123456zx|mac123456|88889999|11111111111|147147147|55667788|miaomiao|qwe123123|12332112|1qaz1qaz|cccccccc|qkvpoia569|youaifa569|oooooooo|12312300|1111111a|imissyou|333333333|19841011|zhimakaimen|xingxing|13572468|19841024|19850603|asdasd123|asd12345|qwe12345|qwerty123|5555555555|1223334444|19821010|19871025|3141592654|1029384756|19841001|19861020|369852147|handsome|12300000|12345678Q|16899168|99998888|a1s2d3f4|qqq11111|19851023|19851025|19851212|112112112|songguang|aaa123123|aaaa0000|19871212|zxcv1234|98765432|98989898|789654123|yyyyyyyy|111111qq|96385274|19861012|19861013|gggggggg|6666666666|19851013|19851019|19841026|19841022|19851218|19861122|19841015|windowsxp|QQQQQqqqqq|12345611|123456456|159753123|11221122|hello123|19861111|1q1q1q1q|qazhuang123|abc12345678|woshitiancai|119119119|19871125|19861028|19851125|19851020|19821016|19861016|19861120|19841017|19881010|wangwang|123123qq|19871012|19841027|111222tianya|980099|323232|393041123|tangkai|dedewang|vicekw|qyahzn|634142554|googletester|tianya|*123456|594232|deeven|9233923|780813|811224bai|qqwwee|az123456|3429795|733733|816618|811009|3353212li|q|ggg111|791127|majiajun|z|523|EtnXtxSa65|zxzxzx|223344|741741|010101|259421|storyofall|always|098765|880312|6|650829yjm|1708|774517397|987987|sgdHhfC4x2|780504|wsky0o0o0o|635241|963963|a00000|9YUE27RI|1qa2ws|000999|19960309|d123456|NBvBB32fa9|114114|20062006|kb9zc8uxtx|2199127551|463395727|113113|ApjSqpM844|d|333222|fashion@000|210316|s1t2o3n4|ye123456|legend|00|734992|789987|000|001280|uifKjhF522|lwxlwx|zzzzz|200810|198410|ndaCebx2wx|8496856|821010|JxsGx2Yd87|801122|312312|jianfei000|sxUaIehAtp|huang|999666|667788|858877108aop|2m66xF2AJT|wanshuai198202|789654321|vjfLkiG522|801018|z1122334455|208884|bbbbbb|3456789|001234|benq*edifer|791028|19891229|199771|summer|qfcFgdA3zx|d54q7xjmhx|6Cxd2X986x|PCwAC33gb9|809998|315315|123987|19871015|198412|b33m6yghef|xm55xExBZS|mcaBdaw2vx|151515|d54p7xjkha|CrkUrrP954|668899|3uc9xN53xH|231997|22|4wdaxQ642F|198211|i97wb6sxq7|831220|lssy123|821222|19991226|theIigD4x2|6666666|e10adc3949ba59abbe56e057f20f88|137900|95368452|17746052|24081986|162752|syq20071003|linjiang|fuanyue47|yx12345678|8675309|operation|1.11111E+17|asd45679|xiaofeng|nishiwoer|a123|genius|tianshi|sakura|332335|86944950|woshishen|19880405|huizhang|szc03137|19840504|killer|5518266|woainia|20052324|asddsa|110112|2587758|xiaoxin|xiaoyao|1.23457E+17|woshishei|gundam|316032611|zhanghang|1063524602|151732|woshizhu|wokaonima|WOshiWO|freedom|39398890|34416912|zhanghao|132456|NISHIZHU|jianjian|198319|diablo|112211|showme|81151007|999|kissme|xiaowei|fantasy|7266979|159632|lee01301228|shangxin|woshiniba|522010|110011|1010110|wenwen|1415926|1234321|213213|19871206|fengfeng|dd123456|932313|wangchao|a45389612|331234|jiejie|xiaofei|965523|2007|19861018|19861225|1232123|zzb19860526|831213|nobodywillknowthispwd|love1314a|goyj2010|117289788|1310613106|xaoyin78|zzzxxx|bensile|411511|AAADDD|admin1234|123456hrr|sam123|g13916055158|QAZXCV|da2khdahda|19810625|z333666|qiye123456|ok100404|x50862356|jthrzok|itbbs20101208PC|123412|2w2w2w|aaasss|loveyou1314|@sohu.com|13245612|8844.8844|ex50867212|88448844|seoer2010|liudu88888|www1234|jkhldfkf12dj|556688|lm292979|2345678|123456rt|sxz123|sidake2bn|lb8844|liuping200|kissbaby|eeeeee|78157878|woyaolp512|123456ok|yixin2011|198361|222888|252323|abc123ddd|adf46sdfsf|818078|5201314q|750250|yy55yy88|xkhl656266|runsystem|hjl80033913|bqueensss|85665684|851010|a123456b|86815945|600242|a88778877|jjjjjj|1987721|aa112288|xkl656266|787878kai|tyc99tycaa|yj123456|okmokm|098098|2616445|zhong133|bqueenssss|liuping1920|831101qsl|asdqwe22|789457dwewee|liuli123|200616|poow29q6666|lingnan123|333777|987453|a123b456|nurk202121|88888888zzk|5655487|laozi124|901027|leon123456|123sv67e9|yiersan|1148878306|qw12345|414512@QQ.com|hld_1209|along0321|feadsf3dW|qqqwww|051123|200884|123124|551188|3edc4rfv5|19851030|qqq111|rui100|qq67890|4451551|123456Bc|123678dd|909090|123654yyy|1qazxsw|q111111|kuai+321=Wen_123|5580817aaa|373518|2895192|ab12345|no1444888|tongji5613|aw123123|zxcvbnm111|447100|LGL6641341|rrrrrr|199065|1985111802|dddfff|15894998@qq.com|62379372|123456t|agiene8547|admdfdsfsdd|kingusj|921212|mashuguang|dmba8898|963258|1234567890000|dg123456|123456k|sxm0627|li9900|2290669|hhhhhh|ucdosa|fcqq12346|111aaa|000123a|2w3e4r|yinchuanqi|love8023|hyp815822|jo@qq.cc|chenqing|eohank1980|6184685521|aa998877|123456ac|123qaz|aqaqaq|oooppp|okok588588|nihao789|windson|111333|1997070101|9861250123|7708801314520|12345678900|1234567891|123456789qq|1472583690|1234567891234567|+|qwertyuiop123|aa123456789|7215217758991|9638527410|wo123456|zhang123456|asdfghjkl123|woaini5201314|ABCD123456789|qwertyuio|123456789aa|woaini1314520|asd123456789|woaini123456|1234567899876543|77585211314|13579246810|zxcvbnm|5205201314|123456789z|13800138000|123456789w|123456789+|abcdefg123|a1314520|www123456789|0000000000000000|qwe123456789|123456789asd|12345678912|qqq123456|123456789*|0147258369|5211314521|laopowoaini|yang123456|qq1314520|qaz123456789|ainiyiwannian|a147258369|l123456789|www123|aaa123456789|woainilaopo|abcd12345|520131400|1213141516|7418529630|nuttertools|1314520123|123456789aaa|as123456789|123456789QWE|zxcvbnm123456|123456789..|qwer123456|wo123456789|123456w|123456789abcd|7758521123|1234567890.|y123456|123456789l|ab123456789|1111122222|m123456|chen123456|a987654321|qw123456789|zxc123456789|li123456789|7758258520|77582581314258|iloveyou1314|qazwsxedcrfv|x123456|987654321a|1314woaini|123698741|huang123|h123456|qwertyuiop123456|1314521521|200820082008|q11111|qq1234567|123456l|12345677654321|0.123456789|poiuytrewq|woxiangni|123456789m|7417417474741|5201314789|123456789zxc|123456789qaz|123456789520|ai123456|52013143344|abcde12345|Love5201314|775852100|123456+|yongyuanaini|131452000|123zxc|147258369a|wohenni|woxihuanni|123456tt|134679258|yang123|zxcvbnm123456789|123456520|7758258123|qazwsx123456|abcdefg123456|123abc456|woaini1314.|wang123456789|s123456789|1357913579|abc5201314|zhangjing|asdfghj|123456780|2582587758|1234567890a|13145201314|520131488|a7758521|74108520963.|Y123456789|010203040506|5201314.|c123456|q5201314|789632145|huang123456|LAOpo520|xiao123456|LAOPO521|woaiwolaopo|zxcv123456|wan1314|m123456789|7410852963|yu123456|123456789ab|5201314qq|x123456789|123456788|a1234567890|BEIJING2008|wu123456|123456qqq|110112119|246813579|aidejiushini|w5201314|h123456789|12345a|123456m|qq147258369|yy123456|102030405060|123.123|123012301230|zhangqiang|asdfghjkl;\'|zhao123456|caonimabi|woaini3344|98765432100|123woaini|WOSHINIDIE|qwer123|12345678999|b123456|123456789as|woaini110|123456789p|love520|77582581314|wei123456|womendeai|00123456789|mengmeng|duibuqiwoaini|123...|iloveyou520|zhangyang|520131|131452|@163.com|12312|12|7936369|775852|521131|)|woain|52052|Adgjmptw|521|7.7088E+12|asdf|12332|woaini131|52152|2|1.23321E+12|Adgjm|aaaaa|321|808000|10101|xxm111|@126.com|woaini52|66666|88888|775825|962464|aaa|8888|8888888|13579|456|12365|5.20131E+13|198711|198712|1988|198811|14725836|2008|98765|125521|qwert|7.21522E+12|welcome|198911|1989|hu1990|14725|1478963|1212|520521|zhang|58452|1987|aaaa|888168|5555555|222|1236987|65432|259758|123369|753159|321123|198812|456654|zhangyu|252525|888|7|2009|1986|qq12345|895623|2222222|456258|11011|dandan|852963');
INSERT INTO `config` VALUES ('order_query_tradeno_limit', '30');
INSERT INTO `config` VALUES ('order_query_contact_limit', '60');
INSERT INTO `config` VALUES ('order_auto_close_time', '10');
INSERT INTO `config` VALUES ('admin_login_bg', 'http://kp.yo0.cn/upload/admin/1/image/20241026/671c5224a213.png');
INSERT INTO `config` VALUES ('shop_buy_protocol', '<p><span style=\"color: rgba(0, 0, 0, 0.4); background-color: rgb(255, 255, 255); font-size: 12px;\">售卡协议</span></p>');
INSERT INTO `config` VALUES ('show_purchase_agreement', '0');
INSERT INTO `config` VALUES ('goods_default_img', 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg');
INSERT INTO `config` VALUES ('site_wordfilter_danger', '');
INSERT INTO `config` VALUES ('site_shop_copyright', '');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `cate_id` int(10) UNSIGNED NOT NULL,
  `sort` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '排序',
  `name` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `price` decimal(10, 2) UNSIGNED NOT NULL DEFAULT 0.00,
  `cost_price` decimal(10, 2) UNSIGNED NOT NULL DEFAULT 0.00 COMMENT '成本价',
  `wholesale_discount` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '批发优惠',
  `wholesale_discount_list` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '批发价',
  `limit_quantity_max` int(10) NOT NULL DEFAULT 0 COMMENT '限购数量',
  `limit_quantity` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '起购数量',
  `coupon_type` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '优惠券 0不支持 1支持',
  `take_card_type` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '取卡密码 0关闭 1必填 2选填',
  `contact_limit` enum('mobile','email','qq','any','default') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'default' COMMENT '客户信息',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '商品说明',
  `remark` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '使用说明',
  `status` tinyint(4) NOT NULL DEFAULT 1 COMMENT '0下架 1上架',
  `create_at` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `card_order` tinyint(3) NOT NULL DEFAULT 0 COMMENT '发卡顺序 0现卖老卡 1先卖新卡',
  `event_give` varchar(2048) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '[]' COMMENT '活动赠送',
  `addtion_give` varchar(2048) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '[]' COMMENT '附加赠送',
  `slider_image` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '轮播图片',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `cate_id`(`cate_id`) USING BTREE,
  INDEX `stauts`(`status`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '商品表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------

-- ----------------------------
-- Table structure for goods_card
-- ----------------------------
DROP TABLE IF EXISTS `goods_card`;
CREATE TABLE `goods_card`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键',
  `goods_id` int(10) UNSIGNED NOT NULL COMMENT '商品id',
  `number` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '卡号',
  `secret` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '卡密',
  `status` tinyint(3) NOT NULL DEFAULT 1 COMMENT '-1删除 0不可用 1可用 2已使用',
  `create_at` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '创建时间',
  `sell_time` int(11) NULL DEFAULT NULL COMMENT '售出时间',
  `is_first` int(11) NULL DEFAULT 0 COMMENT '优先销售',
  `unfreeze_at` int(11) NULL DEFAULT 0 COMMENT '锁卡时间',
  `is_pre` smallint(1) NOT NULL DEFAULT 0 COMMENT '是否显示前缀',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `goods_card_goods_id_index`(`goods_id`) USING BTREE,
  INDEX `unfreeze_at`(`unfreeze_at`) USING BTREE,
  INDEX `idx_goods_status_unfreeze_delete`(`goods_id`, `status`, `unfreeze_at`) USING BTREE,
  INDEX `status`(`status`) USING BTREE,
  INDEX `idx_user_status_delete`(`status`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '商品卡号卡密表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_card
-- ----------------------------

-- ----------------------------
-- Table structure for goods_category
-- ----------------------------
DROP TABLE IF EXISTS `goods_category`;
CREATE TABLE `goods_category`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sort` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `status` tinyint(4) NOT NULL,
  `create_at` int(10) UNSIGNED NOT NULL,
  `pic` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '分类图片',
  `big_pic` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '分类大图',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '商品栏目表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_category
-- ----------------------------

-- ----------------------------
-- Table structure for goods_coupon
-- ----------------------------
DROP TABLE IF EXISTS `goods_coupon`;
CREATE TABLE `goods_coupon`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `cate_id` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '全部',
  `type` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT '类型 1、元  100、%',
  `amount` decimal(10, 2) UNSIGNED NOT NULL DEFAULT 0.00,
  `code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '',
  `remark` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '备注',
  `status` tinyint(3) UNSIGNED NOT NULL DEFAULT 1 COMMENT '1未使用 2已用',
  `expire_at` int(10) UNSIGNED NOT NULL,
  `create_at` int(10) UNSIGNED NOT NULL,
  `min_banlance` int(11) NULL DEFAULT 0 COMMENT '最低使用限额',
  `goods_id` int(11) NULL DEFAULT NULL COMMENT '商品ID',
  `use_times` int(11) NOT NULL DEFAULT 1 COMMENT '可使用次数',
  `receive` int(11) NOT NULL DEFAULT 0 COMMENT '可被主动领取',
  `coupon_type` int(1) NOT NULL DEFAULT 1 COMMENT '优惠券类型1店铺，2分类，3商品',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `user_id`(`code`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '商品优惠券表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods_coupon
-- ----------------------------

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `goods_id` int(10) UNSIGNED NOT NULL,
  `trade_no` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `transaction_id` varchar(60) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '流水号',
  `paytype` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  `channel_id` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '支付渠道',
  `channel_account_id` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '渠道账号',
  `goods_name` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '商品名称',
  `goods_price` decimal(10, 3) UNSIGNED NOT NULL DEFAULT 0.000 COMMENT '商品单价',
  `goods_cost_price` decimal(10, 3) UNSIGNED NOT NULL DEFAULT 0.000 COMMENT '成本价',
  `quantity` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '数量',
  `coupon_type` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '是否使用优惠券',
  `coupon_id` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '优惠券ID',
  `coupon_price` decimal(10, 3) UNSIGNED NOT NULL DEFAULT 0.000 COMMENT '优惠价格',
  `total_price` decimal(10, 3) UNSIGNED NOT NULL DEFAULT 0.000 COMMENT '总价（买家实付款）',
  `total_cost_price` decimal(10, 3) UNSIGNED NOT NULL DEFAULT 0.000 COMMENT '总成本价',
  `take_card_type` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '是否需要取卡密码',
  `take_card_password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '取卡密码',
  `contact` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '联系方式',
  `status` tinyint(3) NOT NULL DEFAULT 0 COMMENT '订单状态 0未支付 1已支付 2已关闭 3已退款',
  `is_freeze` tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '冻结状态',
  `create_at` int(10) UNSIGNED NOT NULL COMMENT '创建时间',
  `create_ip` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'IP',
  `success_at` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '支付成功时间',
  `first_query` tinyint(4) NOT NULL DEFAULT 0 COMMENT '订单第一次查询无需验证码',
  `total_product_price` decimal(10, 3) UNSIGNED NOT NULL DEFAULT 0.000 COMMENT '商品总价（不含短信费）',
  `sendout` int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '已发货数量',
  `finally_money` decimal(10, 4) NOT NULL DEFAULT 0.0000 COMMENT '商户订单最终收入（已扣除短信费，手续费）',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `order_create_at_index`(`create_at`) USING BTREE,
  INDEX `index_contract`(`contact`, `status`) USING BTREE,
  INDEX `index_tp_count`(`status`, `success_at`, `channel_id`) USING BTREE,
  INDEX `goods_id`(`goods_id`) USING BTREE,
  INDEX `trade_no`(`trade_no`) USING BTREE,
  INDEX `channel_id`(`channel_id`) USING BTREE,
  INDEX `status`(`status`) USING BTREE,
  INDEX `is_freeze`(`is_freeze`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '订单表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for order_card
-- ----------------------------
DROP TABLE IF EXISTS `order_card`;
CREATE TABLE `order_card`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `order_id` int(10) UNSIGNED NOT NULL,
  `number` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `secret` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `card_id` int(10) NOT NULL DEFAULT 0 COMMENT '虚拟卡ID',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `order_card_order_id_index`(`order_id`) USING BTREE,
  INDEX `order_card_card_id_index`(`card_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '订单取卡表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_card
-- ----------------------------

-- ----------------------------
-- Table structure for order_master
-- ----------------------------
DROP TABLE IF EXISTS `order_master`;
CREATE TABLE `order_master`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `trade_no` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `model` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `trade_no`(`trade_no`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '订单网关表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order_master
-- ----------------------------

-- ----------------------------
-- Table structure for pay_type
-- ----------------------------
DROP TABLE IF EXISTS `pay_type`;
CREATE TABLE `pay_type`  (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '支付名',
  `logo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT 'logo',
  `ico` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '' COMMENT '图标',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '支付类型表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pay_type
-- ----------------------------
INSERT INTO `pay_type` VALUES (1, '支付宝', '/static/payment/icon_zfb.jpg', '/static/payment/zfb.png');
INSERT INTO `pay_type` VALUES (3, '微信', '/static/payment/icon_wx.jpg', '/static/payment/wx.png');
INSERT INTO `pay_type` VALUES (5, 'QQ钱包扫码', '/static/payment/icon_qq.jpg', '/static/payment/qq.png');
INSERT INTO `pay_type` VALUES (7, '网银支付', '/static/payment/icon_bank.jpg', '/static/payment/bank.png');

-- ----------------------------
-- Table structure for system_menu
-- ----------------------------
DROP TABLE IF EXISTS `system_menu`;
CREATE TABLE `system_menu`  (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `path` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `title` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `component` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `icon` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pid` int(10) NOT NULL DEFAULT 0,
  `app` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'pc' COMMENT '应用',
  `orderNo` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `hidden` tinyint(1) NOT NULL DEFAULT 0,
  `redirect` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` varchar(5) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'M' COMMENT '类型',
  `perms` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '权限标识',
  `keep_alive` tinyint(1) NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 217 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of system_menu
-- ----------------------------
INSERT INTO `system_menu` VALUES (11, 'merchantGoodsCategory', 'category', '商品分类', 'admin/goods/category/index', 'component-dropdown', 54, 'admin', 3, 0, '', 'M', 'adminapi/goods/category/list', 0, 1);
INSERT INTO `system_menu` VALUES (12, 'adminGoodsAdd', 'add', '添加商品', 'admin/goods/good/add', '', 54, 'admin', 0, 1, '', 'M', 'adminapi/goods/good/add', 0, 1);
INSERT INTO `system_menu` VALUES (13, 'adminGoodsEdit', 'edit', '编辑商品', 'admin/goods/good/add', '', 54, 'admin', 0, 1, '', 'M', 'adminapi/goods/good/edit', 0, 1);
INSERT INTO `system_menu` VALUES (14, 'adminGoodsList', 'index', '商品列表', 'admin/goods/good/index', 'form', 54, 'admin', 0, 0, '', 'M', 'adminapi/user/payment/list', 0, 1);
INSERT INTO `system_menu` VALUES (16, 'adminGoodsCardList', 'card', '库存管理', 'admin/goods/card/index', 'assignment-user', 54, 'admin', 5, 0, '', 'M', 'adminapi/goods/card', 0, 1);
INSERT INTO `system_menu` VALUES (18, 'adminGoodsCardAdd', 'card/add', '添加库存', 'admin/goods/card/add', '', 54, 'admin', 0, 1, '', 'M', NULL, 0, 1);
INSERT INTO `system_menu` VALUES (19, 'adminGoodsCoupon', 'coupon', '优惠券', 'admin/goods/coupon/index', 'folder', 54, 'admin', 5, 0, '', 'M', 'adminapi/goods/coupon/list', 0, 1);
INSERT INTO `system_menu` VALUES (20, 'adminGoodsCouponAdd', 'coupon/add', '添加优惠券', 'admin/goods/coupon/add', '', 54, 'admin', 0, 1, '', 'M', 'adminapi/goods/coupon/add', 0, 1);
INSERT INTO `system_menu` VALUES (34, 'adminPermission', 'permission', '权限管理', 'Layout', 'setting-1', 0, 'admin', 300, 0, '/admin/permission/menu', 'L', '', 0, 1);
INSERT INTO `system_menu` VALUES (35, 'adminPermissionMenu', 'menu', '菜单管理', 'admin/permission/menu/index', 'dam-2', 34, 'admin', 0, 0, '', 'M', 'adminapi/permission/menu/list', 0, 1);
INSERT INTO `system_menu` VALUES (37, 'adminOrder', 'order', '交易管理', 'Layout', 'cart', 0, 'admin', 8, 0, '/admin/order/list', 'L', '', 0, 1);
INSERT INTO `system_menu` VALUES (38, 'AdminOrderList', 'list', '订单列表', '/admin/order/list/index', 'article', 37, 'admin', 0, 0, '', 'M', 'adminapi/order/order/list', 0, 1);
INSERT INTO `system_menu` VALUES (39, 'adminWorkbench', 'workbench', '工作台', 'admin/workbench/index', 'desktop', 0, 'admin', 1, 0, '', 'M', 'workbench', 0, 1);
INSERT INTO `system_menu` VALUES (40, 'adminPermissionAdmin', 'admin', '管理员', 'admin/permission/admin/index', 'user-safety', 34, 'admin', 0, 0, '', 'M', 'adminapi/permission/admin/list', 0, 1);
INSERT INTO `system_menu` VALUES (41, 'adminSetting', 'setting', '系统设置', 'layout', 'system-setting', 0, 'admin', 500, 0, '/admin/setting/website', 'L', '', 0, 1);
INSERT INTO `system_menu` VALUES (43, 'adminSettingWebsite', 'website', '站点配置', 'admin/setting/website/index', 'setting', 41, 'admin', 0, 0, '', 'M', 'adminapi/config/config/getConfig', 0, 1);
INSERT INTO `system_menu` VALUES (46, 'adminChannel', 'channel', '支付通道', 'layout', 'wealth-1', 0, 'admin', 12, 0, '/admin/channel/pay_type', 'L', '', 0, 1);
INSERT INTO `system_menu` VALUES (47, 'adminChannelCollection', 'collection', '支付接口', 'admin/channel/collection/index', 'arrow-left-right-1', 46, 'admin', 20, 0, '', 'M', 'adminapi/channel/collection/list', 0, 1);
INSERT INTO `system_menu` VALUES (48, 'adminChannelPay_type', 'pay_type', '支付分类', 'admin/channel/pay_type/index', 'letters-p', 46, 'admin', 0, 0, '', 'M', 'adminapi/channel/payType/list', 0, 1);
INSERT INTO `system_menu` VALUES (51, 'adminPermissionRole', 'role', '管理员角色', '/admin/permission/role/index', 'user-marked', 34, 'admin', 51, 0, '', 'M', 'adminapi/permission/role/list', 0, 1);
INSERT INTO `system_menu` VALUES (54, 'adminShop', 'goods', '商城管理', 'Layout', 'shop-5', 0, 'admin', 5, 0, '/admin/goods/category', 'L', '', 0, 1);
INSERT INTO `system_menu` VALUES (63, 'adminOrderConfig', 'config', '订单配置', 'admin/order/config/index', 'textbox', 37, 'admin', 63, 0, '', 'M', 'adminapi/order/order/list', 0, 1);
INSERT INTO `system_menu` VALUES (69, 'adminChannelCollectionAccount', 'collection/account', '账号管理', 'admin/channel/collection/account/index', 'user-locked', 46, 'admin', 69, 1, '', 'M', 'adminapi/channel/collection/list', 0, 1);
INSERT INTO `system_menu` VALUES (73, 'adminOrderChannel', 'channel', '渠道分析', 'admin/order/analysis/channel/index', 'blockchain', 37, 'admin', 73, 0, '', 'M', 'adminapi/order/analysis/channel', 0, 1);
INSERT INTO `system_menu` VALUES (75, 'adminPermissionMenu', '', '添加', '', '', 35, 'admin', 75, 0, '', 'B', 'adminapi/permission/menu/add', 0, 1);
INSERT INTO `system_menu` VALUES (77, 'adminPermissionMenu', '', '编辑', '', '', 35, 'admin', 77, 0, '', 'B', 'adminapi/permission/menu/edit', 0, 1);
INSERT INTO `system_menu` VALUES (78, 'adminPermissionMenu', '', '删除', '', '', 35, 'admin', 78, 0, '', 'B', 'adminapi/permission/menu/del', 0, 1);
INSERT INTO `system_menu` VALUES (80, 'adminPermissionAdmin', '', '添加', '', '', 40, 'admin', 80, 0, '', 'B', 'adminapi/permission/admin/add', 0, 1);
INSERT INTO `system_menu` VALUES (81, 'adminPermissionAdmin', '', '编辑', '', '', 40, 'admin', 81, 0, '', 'B', 'adminapi/permission/admin/edit', 0, 1);
INSERT INTO `system_menu` VALUES (82, 'adminPermissionAdmin', '', '分配角色', '', '', 40, 'admin', 82, 0, '', 'B', 'adminapi/permission/admin/setRoles', 0, 1);
INSERT INTO `system_menu` VALUES (83, 'adminPermissionAdmin', '', '删除', '', '', 40, 'admin', 83, 0, '', 'B', 'adminapi/permission/admin/del', 0, 1);
INSERT INTO `system_menu` VALUES (84, 'adminPermissionRole', '', '添加', '', '', 51, 'admin', 84, 0, '', 'B', 'adminapi/permission/role/add', 0, 1);
INSERT INTO `system_menu` VALUES (85, 'adminPermissionRole', '', '编辑', '', '', 51, 'admin', 85, 0, '', 'B', 'adminapi/permission/role/edit', 0, 1);
INSERT INTO `system_menu` VALUES (86, 'adminPermissionRole', '', '权限', '', '', 51, 'admin', 86, 0, '', 'B', 'adminapi/permission/role/rule', 0, 1);
INSERT INTO `system_menu` VALUES (87, 'adminPermissionRole', '', '删除', '', '', 51, 'admin', 87, 0, '', 'B', 'adminapi/permission/role/del', 0, 1);
INSERT INTO `system_menu` VALUES (91, 'adminChannelCollection', '', '添加', '', '', 47, 'admin', 91, 0, '', 'B', 'adminapi/channel/collection/add', 0, 1);
INSERT INTO `system_menu` VALUES (92, 'adminChannelCollection', '', '编辑', '', '', 47, 'admin', 92, 0, '', 'B', 'adminapi/channel/collection/edit', 0, 1);
INSERT INTO `system_menu` VALUES (93, 'adminChannelCollection', '', '删除', '', '', 47, 'admin', 93, 0, '', 'B', 'adminapi/channel/collection/del', 0, 1);
INSERT INTO `system_menu` VALUES (94, 'adminChannelCollection', '', '账号管理', '', '', 47, 'admin', 94, 0, '', 'B', 'adminapi/channel/collectionAccount/list', 0, 1);
INSERT INTO `system_menu` VALUES (95, 'adminChannelCollection', '', '账号添加', '', '', 47, 'admin', 95, 0, '', 'B', 'adminapi/channel/collectionAccount/add', 0, 1);
INSERT INTO `system_menu` VALUES (96, 'adminChannelCollection', '', '账号编辑', '', '', 47, 'admin', 96, 0, '', 'B', 'adminapi/channel/collectionAccount/edit', 0, 1);
INSERT INTO `system_menu` VALUES (97, 'adminChannelCollection', '', '账号删除', '', '', 47, 'admin', 97, 0, '', 'B', 'adminapi/channel/collectionAccount/del', 0, 1);
INSERT INTO `system_menu` VALUES (98, 'adminPermission', 'log', '操作日志', 'admin/permission/log/index', 'system-log', 34, 'admin', 98, 0, '', 'M', 'adminapi/permission/log/list', 0, 1);
INSERT INTO `system_menu` VALUES (99, 'adminPermission', '', '批量删除', '', '', 98, 'admin', 99, 0, '', 'B', 'adminapi/permission/log/delBatch', 0, 1);
INSERT INTO `system_menu` VALUES (100, 'adminChannelPay_type', '', '删除', '', '', 48, 'admin', 100, 0, '', 'B', 'adminapi/channel/payType/del', 0, 1);
INSERT INTO `system_menu` VALUES (101, 'adminChannelPay_type', '', '编辑', '', '', 48, 'admin', 101, 0, '', 'B', 'adminapi/channel/payType/edit', 0, 1);
INSERT INTO `system_menu` VALUES (102, 'adminChannelPay_type', '', '新增', '', '', 48, 'admin', 102, 0, '', 'B', 'adminapi/channel/payType/add', 0, 1);
INSERT INTO `system_menu` VALUES (130, 'AdminOrderList', '', '删除', '', '', 38, 'admin', 130, 0, '', 'B', 'adminapi/order/order/del', 0, 1);
INSERT INTO `system_menu` VALUES (132, 'AdminOrderList', '', '补单', '', '', 38, 'admin', 132, 0, '', 'B', 'adminapi/order/order/notify', 0, 1);
INSERT INTO `system_menu` VALUES (133, 'AdminOrderList', '', '冻结', '', '', 38, 'admin', 133, 0, '', 'B', 'adminapi/order/order/freeze', 0, 1);
INSERT INTO `system_menu` VALUES (134, 'adminSetting', '', '更新配置', '', '', 41, 'admin', 134, 0, '', 'B', 'adminapi/config/config/editConfig', 0, 1);
INSERT INTO `system_menu` VALUES (141, 'adminArticle', 'article', '文章系统', 'LAYOUT', 'component-dropdown', 0, 'admin', 141, 0, '/admin/article/category', 'L', '', 0, 1);
INSERT INTO `system_menu` VALUES (142, 'adminArticleIndex', 'index', '文章管理', 'admin/article/article/index', 'book', 141, 'admin', 142, 0, '', 'M', 'adminapi/article/article/list', 0, 1);
INSERT INTO `system_menu` VALUES (143, 'adminArticleIndex', '', '添加', '', '', 142, 'admin', 143, 0, '', 'B', 'adminapi/article/article/add', 0, 1);
INSERT INTO `system_menu` VALUES (144, 'adminArticleIndex', '', '删除', '', '', 142, 'admin', 144, 0, '', 'B', 'adminapi/article/article/del', 0, 1);
INSERT INTO `system_menu` VALUES (145, 'adminArticleCategory', 'category', '文章分类', 'admin/article/category/index', 'frame-1', 141, 'admin', 145, 0, '', 'M', 'adminapi/article/articleCategory/list', 0, 1);
INSERT INTO `system_menu` VALUES (146, 'adminArticleCategory', '', '添加', '', '', 145, 'admin', 146, 0, '', 'B', 'adminapi/article/articleCategory/add', 0, 1);
INSERT INTO `system_menu` VALUES (147, 'adminArticleCategory', '', '编辑', '', '', 145, 'admin', 147, 0, '', 'B', 'adminapi/article/articleCategory/edit', 0, 1);
INSERT INTO `system_menu` VALUES (148, 'adminArticleCategory', '', '删除', '', '', 145, 'admin', 148, 0, '', 'B', 'adminapi/article/articleCategory/del', 0, 1);
INSERT INTO `system_menu` VALUES (149, 'adminArticleIndex', '', '编辑', '', '', 142, 'admin', 149, 0, '', 'B', 'adminapi/article/article/edit', 0, 1);
INSERT INTO `system_menu` VALUES (200, 'adminOrderList', 'orderList', '我的订单', 'personal/order/index', 'article', 0, 'personal', 200, 0, '', 'M', '1', 0, 1);
INSERT INTO `system_menu` VALUES (201, 'personalSetting', 'setting', '账号设置', 'personal/setting/index', 'setting', 0, 'personal', 201, 0, '', 'M', '1', 0, 1);
INSERT INTO `system_menu` VALUES (216, 'adminOrderCard', 'card', '查看卡密', 'admin/order/list/card', '', 37, 'admin', 216, 1, '', 'M', '1', 0, 1);

-- ----------------------------
-- Table structure for system_uploads
-- ----------------------------
DROP TABLE IF EXISTS `system_uploads`;
CREATE TABLE `system_uploads`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `cate_id` int(11) NOT NULL COMMENT '所属栏目',
  `name` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '名称',
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文件',
  `file_size` int(11) NOT NULL COMMENT '文件大小',
  `ext` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '扩展名',
  `storage` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'local' COMMENT '存储位置',
  `created_at` date NULL DEFAULT NULL COMMENT '上传时间',
  `updated_at` date NULL DEFAULT NULL COMMENT '更新时间',
  `file_type` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'image' COMMENT '文件类型',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `name`(`name`) USING BTREE,
  INDEX `ext`(`ext`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '预留·附件表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of system_uploads
-- ----------------------------

-- ----------------------------
-- Table structure for system_uploads_category
-- ----------------------------
DROP TABLE IF EXISTS `system_uploads_category`;
CREATE TABLE `system_uploads_category`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `pid` int(11) NOT NULL DEFAULT 0 COMMENT '所属栏目',
  `name` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '分类名称',
  `user_id` int(11) NULL DEFAULT NULL COMMENT '图片分类所属人',
  `app` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'admin' COMMENT '图片分类所属应用admin merchant personal',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `admin_id`(`user_id`) USING BTREE,
  INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '预留·附件表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of system_uploads_category
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
