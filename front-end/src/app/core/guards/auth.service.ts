import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ConfigService } from '../config/config.service';
import { HelperService } from '../helper/helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  constructor(private config: ConfigService, private helper: HelperService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : boolean {
    if(!!localStorage.getItem(this.config.storageKey.token)) {
      return true;
    }

    this.helper.next('login');
    return true;
  }
}
