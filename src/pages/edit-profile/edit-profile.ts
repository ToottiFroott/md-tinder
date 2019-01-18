import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TinderProvider } from '../../providers/tinder/tinder';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  public editUser: any = {};
  public pic: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tinProv: TinderProvider,
    public viewCtrl: ViewController
  ) { }

  ionViewDidLoad() {
    let tinUser = this.navParams.get('editUser');
    if (tinUser) {
      this.editUser = tinUser;
    }
    this.pic = this.editUser._attachments.profilePic.data;
  }

  updateProfile() {
    this.tinProv.update(this.editUser);
    this.viewCtrl.dismiss();
  }

  changePicture() {
    
  }
}
