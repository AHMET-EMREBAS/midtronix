import { HttpInterceptorFn } from '@angular/common/http';
import { API_BASEURL_FOR_STORYBOOK } from './base-url';

export const storyBookHttpInterceptor: HttpInterceptorFn[] = [
  (req, next) => {
    if (req.url) {
      req = req.clone({ url: `${API_BASEURL_FOR_STORYBOOK}/${req.url}` });
      return next(req);
    }
    return next(req);
  },
];
