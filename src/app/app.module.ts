import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//import Module
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//import component
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsdetailComponent } from './postsdetail/postsdetail.component';
import { AddpostsComponent } from './addposts/addposts.component';

//import service
import { PostsService } from './posts.service';

//routes
import { Routes, RouterModule } from '@angular/router';

//connect database
import { HttpClientModule } from '@angular/common/http';

// //local storage / session
import { IonicStorageModule } from '@ionic/storage-angular';




const appRoutes: Routes = [
  {path:'posts', component: PostsComponent}, 
  {path:'profile/:id', component: ProfileComponent}, 
  {path:'postsdetail/:id' , component:PostsdetailComponent},
  {path:'addposts' , component:AddpostsComponent},

];

@NgModule({
  declarations: [AppComponent, PostsComponent, ProfileComponent, PostsdetailComponent, AddpostsComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes), IonicStorageModule.forRoot() ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, PostsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
