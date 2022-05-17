// import { HttpProvider } from './../providers/http/http';
import { AppConfig } from './../app/app.config';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';
// import { NavController } from 'ionic-angular';

export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap((event: HttpResponse<any>) => {
            if (event instanceof HttpResponse) {
                if (event.headers && event.headers.has('Authorization')) { // 这个地方要根据实际去改
                    let token = event.headers.get('Authorization');
                    AppConfig.token = token;
                    console.log('token------------->', token);
                }
            }
        }, error => {
            console.log('请求失败------------->');
            if (error.status == 401) {
                //token失效 重新登录

                return;
            }
        }));
    }
}