import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, ToastController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { TinderProvider } from '../../providers/tinder/tinder';
import { MyAccountPage } from '../my-account/my-account';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;
  password: string;

  public tinUsers;

  constructor(
    public navCtrl: NavController,
    public tinProv: TinderProvider,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController
  ) { }

  ionViewDidEnter() {
    this.tinProv.createPouchDB();

    this.tinProv.read()
      .then(users => {
        this.tinUsers = users;
      }).catch((err) => {
        console.log(err);
      });
  }

  login(username, password) {
    this.tinProv.read()
      .then(tinUsers => {
        for (let i = 0; i < Object.keys(tinUsers).length; i++) {
          if (tinUsers[i].doc.username === username && tinUsers[i].doc.password === password) {
            this.navCtrl.push(MyAccountPage, { user: this.tinUsers[i] });
          }
        }
      }).catch((err) => {
        console.log(err)
      });
  }

  createProfile() {
    this.navCtrl.push(RegisterPage);
  }

  reReadEmployees() {
    this.tinProv.read()
      .then(tinUsers => {
        this.tinUsers = tinUsers;
      }).catch((err) => { console.log(err) });
  }

  showProfile(user) {
    let modal = this.modalCtrl.create('UserProfilePage', { tinUser: user });
    modal.onDidDismiss(data => {
      this.reReadEmployees();
    });
    modal.present();
  }
}
