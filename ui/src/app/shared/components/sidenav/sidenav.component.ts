import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { Menu } from '../../model/menu-items/menu';

import { MenuItems } from '../../model/menu-items/menuItems';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav : Menu[];

  private _mobileQueryListener: () => void;

  constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        menuItems:MenuItems) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.fillerNav=menuItems.getMenuItem();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}