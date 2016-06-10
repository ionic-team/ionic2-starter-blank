import { Component } from "@angular/core";
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {
  }

  /*
    pushPage(){
      this._navController.push(SomeImportedPage, { userId: "12345"});
    }
  */
}
