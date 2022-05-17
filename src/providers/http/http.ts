import { HttpClient } from '@angular/common/http';
import { AppConfig } from './../../app/app.config';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  private baseServerUrl = 'http://'  //这个地方是请求的baseUrl

  constructor(public httpClient: HttpClient) {
    //console.log('Hello HttpProvider Provider');
  }

  /**
   * post请求
   * @param url 相对路径
   * @param params 参数
   */
  public post(url, params: any): Observable<any> {
    //console.log("此时token：",AppConfig.token)
    return this.httpClient.post(this.baseServerUrl + url, params, {
      headers: {
        'Content-Type': 'application/json',
        'cookie': AppConfig.token,
        'Request-Origin': 'app'
      }
    })
  }

  /**
   * get方法
   * @param url 相对路径
   * @param params 参数
   */
  public get(url, params: any): Observable<any> {
    //console.log("此时token：",AppConfig.token)
    return this.httpClient.get(this.baseServerUrl + url, {
      headers: {
        'Content-Type': 'application/json',
        'cookie': '' + AppConfig.token,
        'Request-Origin': 'app'
      },
      params: params
    })
  }

}
