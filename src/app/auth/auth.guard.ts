import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

import { inject } from '@angular/core';
import { map, take } from 'rxjs';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.currUser.pipe(
    take(1),
    map((user) => {
      const isAuth = !!user;

      if (isAuth) {
        if (route.routeConfig?.path === 'auth') {
          return router.createUrlTree(['/profile']);
        }
        return true;
      } else {
        if (route.routeConfig?.path === 'auth') {
          return true;
        } return router.createUrlTree(['/signup'])
      }
    })
  )
};
