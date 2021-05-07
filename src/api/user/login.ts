import { service } from '@/utils/http/request'
import { RequestType } from '@/enum/request'
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
enum UserUrl {
   LOGIN = '/Token/GenToken'
}
export function LOGIN(params: LoginParams) {
   return service.request({
      url: UserUrl.LOGIN,
      method: RequestType.POST,
      data: params
   }).then((response) => {
      return response;
   })
}
