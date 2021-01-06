import  { service } from '@/utils/http/request'
import { RequestEnum } from '@/enum/httpEnum'
import { LoginParams } from './types'
import { userUrl } from '@/enum/Interface_url/userEnum'

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


export function LOGIN(params:LoginParams) {
    return service.request({
     	url: userUrl.LOGIN,
      method: RequestEnum.GET,
      params:params
    }).then((response) => {
       return response;
	})
}
