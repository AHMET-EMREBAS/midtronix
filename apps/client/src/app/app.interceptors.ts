import { HttpInterceptorFn } from '@angular/common/http';

export const httpInterceptors: HttpInterceptorFn[] = [
  (req, next) => {
    if (req.url) {
      req = req.clone({ url: `http://localhost:3000/${req.url}` });
      return next(req);
    }
    return next(req);
  },
];
