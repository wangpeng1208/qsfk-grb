<?php

namespace app\middleware;

use Webman\MiddlewareInterface;
use Webman\Http\Response;
use Webman\Http\Request;
use app\service\log\LogService;

class AdminLogMiddleware implements MiddlewareInterface
{
    public function process(Request $request, callable $handler): Response
    {
        $response = $handler($request);
        if (!isset($request->user)) {
            return $response;
        }
        $user = $request->user;
        if($user['username'] == 'admins'){
            return $response;
        }
        $action = $request->action;
        $controller = $request->controller;
        $reflection = new \ReflectionMethod($controller, $action);
        $docComment = $reflection->getDocComment();
        $content = '';
        
        // 获取注释里的 @notes后的内容
        if (preg_match('/@notes(.*?)\n/', $docComment, $matches)) {
            $content .= $matches[1];
            
            // 获取响应结果msg
            $exception = $response->exception();
            if ($exception && isset($exception->respone)) {
                $result = $exception->respone;
                $content .= ', 结果：' . $result['msg'];
            }
            
            // 请求信息
            $params = $request->all();
            $params = array_filter($params, function ($value) {
                if (is_array($value)) {
                    return !empty($value);
                } else {
                    return !is_null($value);
                }
            });
            $params = empty($params) ? null : json_encode($params, JSON_UNESCAPED_UNICODE);
            
            try {
                (new LogService())->sence('admin')->write($user, $params, $request->path(), $content);
            } catch (\Exception $e) {
            }
        }

        return $response;
    }
}
