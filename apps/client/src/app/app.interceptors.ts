import { HttpInterceptorFn } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { AuthTokenStore } from '@mdtx/material/core';

const baseURL = isDevMode() ? 'http://localhost:3000/' : '';

export const httpInterceptors: HttpInterceptorFn[] = [
  (req, next) => {
    const token = AuthTokenStore.get();
    const headers = req.headers.append('Authorization', `Bearer ${token}`);
    const newURL = baseURL + req.url.replace('api', 'api/v1');
    req = req.clone({ url: newURL, headers });
    
    return next(req);
  },
];
