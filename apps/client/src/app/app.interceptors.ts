import { HttpInterceptorFn } from '@angular/common/http';
import { isDevMode } from '@angular/core';

export const httpInterceptors: HttpInterceptorFn[] = [
  (req, next) => {
    if (isDevMode()) {
      req = req.clone({ url: `http://localhost:3000/${req.url}` });

      if (req.url) {
        return next(req);
      }
    }
    return next(req);
  },
];
