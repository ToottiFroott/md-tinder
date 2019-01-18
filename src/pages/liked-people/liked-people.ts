import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TinderProvider } from '../../providers/tinder/tinder';

@IonicPage()
@Component({
  selector: 'page-liked-people',
  templateUrl: 'liked-people.html',
})
export class LikedPeoplePage {
  public appUser;
  public likedPeople: Array<string> = [];
  public likedPeopleObjects: Array<Object> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public tinProv: TinderProvider) {

  }

  ionViewDidLoad() {
    let user = this.navParams.get('user');
    if (user) {
      this.appUser = user;
    }

    for (let i = 0; i < this.appUser.likedPeople.length; i++) {
      this.likedPeople.push(this.appUser.likedPeople[i]);
    }
  }

}
