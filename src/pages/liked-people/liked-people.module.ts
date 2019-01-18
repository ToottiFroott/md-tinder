import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LikedPeoplePage } from './liked-people';

@NgModule({
  declarations: [
    LikedPeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(LikedPeoplePage),
  ],
})
export class LikedPeoplePageModule {}
