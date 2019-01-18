import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TinderProvider } from '../../providers/tinder/tinder';

@IonicPage()
@Component({
  selector: 'page-conversations',
  templateUrl: 'conversations.html',
})
export class ConversationsPage {
  private appUser;
  private matchingUsers : Array<Object> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public tinProv: TinderProvider) {

  }

  ionViewDidLoad() {
    let user = this.navParams.get('appUser');
    if (user) {
      this.appUser = user;
    }
  }

}
