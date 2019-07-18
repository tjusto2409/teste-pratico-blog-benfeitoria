import { Injectable } from '@angular/core';
import { Router, UrlSegment, PRIMARY_OUTLET } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private route: Router) { }

  getParseURL() {
    const segment: UrlSegment[] = this.route.parseUrl(this.route.url).root.children[PRIMARY_OUTLET].segments;
    return segment[0].path;
  }
}
