import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/Features/auth/services/auth.service';
import { RoleEnum } from 'src/app/common/Enums/RoleEnum.enum';


export const adminGuard: CanActivateFn = (route, state) => {
  const _Rouer=inject(Router);
  const _AuthService=inject(AuthService);

if (localStorage.getItem('token')!=null&&_AuthService.role==RoleEnum.ADMIN) {
    return true;
} else{
  _Rouer.navigateByUrl('/auth');
  return false;
}
};
