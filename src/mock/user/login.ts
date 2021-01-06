import Mock from 'mockjs';
import { RequestEnum } from '@/enum/httpEnum';
import $ from 'jquery';
import { userUrl } from '@/enum/Interface_url/userEnum'

/**
 * Mock.mock()第一个参数是需要拦截的接口，
 * 第二个参数表明ajax请求类型（get/post/put/delete等），
 * 第三个参数是模拟返回值的数据模版。
 */
/*** 设置随机的接口响应时间，10-2500毫秒 模拟真实接口请求场景***/
Mock.setup({
    // timeout: '10-2500'
});
export function LOGIN() {
    Mock.mock(userUrl.LOGIN,'get',() => {
        return {
            'access_token':'eyJhbGciOiJIUzUxMiIsInR5cCI',
            'profile':{
                'auth_time': 1609903203,
                'expires_at': 1610508003,
                'name': "admin",
                'sid': 1
            },
            'token_type': "Bearer"
        }
    });
    return $.ajax({  
        type : RequestEnum.GET,   
        url : userUrl.LOGIN, 
        dataType : "json",
        success : function(response:any) { 
            return response;
        }  
    });  
}


