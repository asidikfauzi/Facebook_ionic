import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { LoginModel } from './login.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
//model
import { ProfileModel } from './profile.model';
import { PostsModel } from './posts.model';
import { KomentarModel } from './komentar.model';

//storage
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsUpload: PostsModel[];
  postsLogin: LoginModel[];
  postsProfile: ProfileModel[];
  postsKomentar: KomentarModel[];

  id = "";
  url = "";
 
  //POST LIST
  postsList():Observable<any> {
  	return this.http.get("http://localhost:8000/facebookUAS/posts.php");
  }

  listPosts() {
    this.postsList().subscribe(
      (data) => {
        this.postsUpload=data;
      });
  }

  //PROFILE LIST
  postsListProfile(id:string):Observable<any> {
    let body = new HttpParams();
    body = body.set('id', id);
  	return this.http.get("http://localhost:8000/facebookUAS/profile.php?id=" + id);
  }

  listProfiles() {
    this.postsListProfile(this.id).subscribe(
      (data) => {
        this.postsProfile=data;
      });
  }

  //KOMENTAR LIST
  postsListKomentar(url:string):Observable<any> {
    let body = new HttpParams();
    body = body.set('url', url);
  	return this.http.get("http://localhost:8000/facebookUAS/komentar.php?url=" + url);
  }

  listKomentar() {
    this.postsListKomentar(this.url).subscribe(
      (data) => {
        this.postsKomentar=data;
      });
  }

  cekLogin(username:string, password:string ):Observable<any> 
  {
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('password', password);
  	return this.http.post("http://localhost:8000/facebookUAS/login.php", body);
  }

  //add posts
  newPosts(url:string, caption:string, user_id:string):Observable<any> 
  {
    let body = new HttpParams();
    body = body.set('url', url);
    body = body.set('caption', caption);
    body = body.set('users_id', user_id);
    return this.http.post ("http://localhost:8000/facebookUAS/addposts.php", body);
  }

  newUser(username:string, name:string, password:string):Observable<any> 
  {
    let body = new HttpParams();
    body = body.set('username', username);
    body = body.set('name', name);
    body = body.set('password', password);
    return this.http.post ("http://localhost:8000/facebookUAS/register.php", body);
  }

  newKomentar(comment:string, users_id:string, posts_id:string):Observable<any> 
  {
    let body = new HttpParams();
    body = body.set('comment', comment);
    body = body.set('id', users_id);
    body = body.set('url', posts_id);
    return this.http.post ("http://localhost:8000/facebookUAS/addkomentar.php", body);
  }
  


  constructor(private http: HttpClient, public storage: Storage) 
  { 
    this.listPosts(); 
    this.listProfiles();
  }
}
