import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {DetailPage} from '../detail/detail';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private _navController: NavController) {

  }

  pushPage(buttonColor: string) {
    this._navController.push(DetailPage, { color: buttonColor });
  }
}
