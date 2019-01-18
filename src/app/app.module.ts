import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TinderProvider } from '../providers/tinder/tinder';  
import { RegisterPage } from '../pages/register/register';
import { ImageProvider } from '../providers/image/image';
import { Camera } from '@ionic-native/camera';
import { MyAccountPage } from '../pages/my-account/my-account';
import { Crop } from '@ionic-native/crop';
import { ConversationsPage } from '../pages/conversations/conversations';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { SwipePage } from '../pages/swipe/swipe';
import { LikedPeoplePage } from '../pages/liked-people/liked-people';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    MyAccountPage,
    ConversationsPage,
    EditProfilePage,
    SwipePage,
    LikedPeoplePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    RegisterPage,
    MyAccountPage,
    ConversationsPage,
    EditProfilePage,
    SwipePage,
    LikedPeoplePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TinderProvider,
    ImageProvider,
    Camera,
    Crop
  ]
})
export class AppModule {}
