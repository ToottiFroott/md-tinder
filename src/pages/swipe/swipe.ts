import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TinderProvider } from '../../providers/tinder/tinder';

@IonicPage()
@Component({
  selector: 'page-swipe',
  templateUrl: 'swipe.html',
})
export class SwipePage {
  public currentYear: number = new Date().getFullYear();
  public appUser: any;
  public tinderUsers;
  public tempDisplayUsers: Array<Object> = [];
  public displayUsers: Array<Object> = [];
  public liked: Array<string> = [];
  public posList: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tinProv: TinderProvider,
    public viewCtrl: ViewController
  ) { }

  ionViewDidLoad() {
    let tinUser = this.navParams.get('user');
    if (tinUser) {
      this.appUser = tinUser;
    }
    this.tinProv.read()
      .then(users => {
        this.tinderUsers = users;
        for (let tinderUser of this.tinderUsers) {
          if (tinderUser.doc.username != this.appUser.username && tinderUser.doc.gender != this.appUser.gender) {
            this.tempDisplayUsers.push(tinderUser);
          }
        }
        for (let i = 0; i < this.tempDisplayUsers.length; i++) {
          this.displayUsers.push(this.tempDisplayUsers[i]['doc']);
        }

      }).catch((err) => {
        console.log(err);
      });
  }

  showProfile(user) {

  }

  swiped(e, i) {
    switch (e.offsetDirection) {
      case 2:
        console.log("person disliked");
        this.displayUsers.splice(i, 1);

        break;
      case 4:
        console.log("person liked");
        this.liked.push(this.displayUsers[i]["username"]);
        this.appUser.likedPeople = this.liked;
        this.tinProv.update(this.appUser);
        this.displayUsers.splice(i, 1);

        break;
    }
  }

  goBack() {
    this.viewCtrl.dismiss(this.appUser);
  }

}
