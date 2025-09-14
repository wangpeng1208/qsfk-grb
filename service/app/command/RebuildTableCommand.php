<?php

namespace app\command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use think\facade\Db;

/**
 * 使用方法： php webman rebuild:table
 */
class RebuildTableCommand extends Command
{
    protected static $defaultName = 'rebuild:table';
    protected static $defaultDescription = '删库重建';

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io       = new SymfonyStyle($input, $output);
        $continue = $io->confirm("确认是否清空数据库重新开始！", true);
        if (!$continue) {
            $output->writeln("<error>清空已取消</error>");
            return parent::FAILURE;
        }
        $output->writeln("==========  删库重建开始执行 ========== ");
        $triggerTime = time();
        // 清空数据库表
        $rebuild_table_name = ['admin_log', 'article', 'article_category', 'channel', , 'channel_account', 'goods', 'goods_card', 'goods_category', 'goods_coupon', '`order`', 'order_card', 'order_master', 'system_uploads', 'system_uploads_category',];

        foreach ($rebuild_table_name as $table_name) {
            $output->writeln("正在清空表：{$table_name}...");
            Db::query('truncate table ' . $table_name);
        }

        // $this->execute($input,  $output);
        $timeUsed = time() - $triggerTime;
        $output->writeln("info: 删库重建执行完成，用时：" . $timeUsed . "秒");
        return parent::SUCCESS;
    }
}