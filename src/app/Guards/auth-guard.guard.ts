import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginServiceService } from '../Services/login-service.service';

export const authGuardGuard: CanActivateFn = (route, state) => {
  debugger;
  const authService=inject(LoginServiceService);
  const router=inject(Router);
  if(authService.islogIn)
  return true;
  alert("You Must Login First!")
router.navigate(['/Login'])
return false;
};
