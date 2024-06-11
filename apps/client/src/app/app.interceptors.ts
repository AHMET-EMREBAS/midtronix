import { HttpInterceptorFn } from '@angular/common/http';
import { isDevMode } from '@angular/core';

export const httpInterceptors: HttpInterceptorFn[] = [
  (req, next) => {
    console.log(':::::::::::::::::: ', req.url);
    if (isDevMode()) {
      const headers = req.headers.append(
        'Authorization',
        'Bearer SOmetoken goes here'
      );
      req = req.clone({
        url: 'http://localhost:3000/' + req.url.replace('api', 'api/v1'),
        headers,
      });

      if (req.url) {
        return next(req);
      }
    }

    return next(req);
  },
];
