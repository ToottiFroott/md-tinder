import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ConversationsPage } from '../conversations/conversations';
import { SwipePage } from '../swipe/swipe';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { TinderProvider } from '../../providers/tinder/tinder';
import { LikedPeoplePage } from '../liked-people/liked-people';

@IonicPage()
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {

  public user: any = {};
  public pic: any;
  public age: any;
  public likedPpl: Array<string> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tinProv: TinderProvider,
    public viewCtrl: ViewController
  ) {
    let tinUser = this.navParams.get('user');
    if (tinUser) {
      this.user = tinUser.doc;
      this.age = new Date().getFullYear() - this.user.birthday.substring(0, 4);
    }
    this.pic = this.user._attachments.profilePic.data;
  }

  ionViewDidLoad() {
    for (let i = 0; i < this.user.likedPeople.length; i++) {
      this.likedPpl.push(this.user.likedPeople[i]);
    }
  }

  editProfile() {
    this.navCtrl.push(EditProfilePage, { editUser: this.user });
  }

  ongoingConv() {
    this.navCtrl.push(ConversationsPage, { appUser: this.user });
  }

  likedPeople() {
    this.navCtrl.push(LikedPeoplePage, { user: this.user });
  }

  startSwiping() {
    this.navCtrl.push(SwipePage, { user: this.user });
  }
}
