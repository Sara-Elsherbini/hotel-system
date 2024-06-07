import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const baseUrl: string = 'https://154.41.228.234:3000/api/v0/';
    const token = localStorage.getItem('token');
    const url=request.url.includes('assets')?request.url:baseUrl+request.url;
    const modifiedReq = request.clone({

      url: url,
      setHeaders: {
        Authorization: `${token}`,
        lang:localStorage.getItem('lang')||'en'
      },
    });
    return next.handle(modifiedReq);
  }
}
