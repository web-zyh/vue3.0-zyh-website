import  { service } from '../utils/request'
import { RequestEnum } from '../config/httpEnum'
import { LoginParams } from './types'

/**
 * 注意 :
 * POST请求主体为 
 *  url: InterfaceUrl.LOGIN,
    method: RequestEnum.POST,
    data:params,

 * GET请求
 *  url: url,
    method: method,
    params:params,
 */

enum InterfaceUrl {
    LOGIN = '/Token/GenToken'
}
export function Login(params: LoginParams) {
    return service.request({
     	url: InterfaceUrl.LOGIN,
        method: RequestEnum.POST,
        data:params,
    }).then((response:any) => {
        if(response.code == "1"){
            return response.data;
        };
	})
}
