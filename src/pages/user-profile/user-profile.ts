import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TinderProvider } from '../../providers/tinder/tinder';

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  public user: any = {};
  public pic: any;
  public age: any;
  public likedPpl: Array<Object> = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private tinProv: TinderProvider,
    public viewCtrl: ViewController
  ) { }

  ionViewDidLoad() {
    let tinUser = this.navParams.get('tinUser');
    if(tinUser) {
      this.user = tinUser.doc;
    }
    this.pic = this.user._attachments.profilePic.data;
    this.age = new Date().getFullYear() - this.user.birthday.substring(0,4);
    for(let i = 0; i < this.user.likedPeople.length; i++) {
      this.likedPpl.push(this.user.likedPeople[i]);
    }
  }

  delProfile() {
    this.tinProv.delete(this.user).catch(() => {

    });
    this.viewCtrl.dismiss(this.user);
  }


  goBack() {
    this.viewCtrl.dismiss(this.user);
  }
}
