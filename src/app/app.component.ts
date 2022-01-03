import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute  } from '@angular/router';

//import storage
import { Storage } from '@ionic/storage-angular';
import { empty } from 'rxjs';

//import storage
import { PostsService } from './posts.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  result="";

  logins=[];
  komentar=[];
  // create storage for login
  user_id = "";
  id = "";
  name = "";

  //login
  login_user="";
  login_password="";
  login_error="";

  //register
  register_username = "";
  register_name = "";
  register_password = "";


  async ngOnInit() {

    await this.storage.create();

    this.user_id = await this.storage.get('user_id');
    this.id = await this.storage.get('id');
    this.name = await this.storage.get('name');
    this.logins = this.ps.postsLogin;
    this.loginCek();
  }

  isHomeRoute() {
    return this.router.url === '/';
  }

  constructor(private router: Router, public storage: Storage, public ps:PostsService, public route:ActivatedRoute) {}

  loginCek() {
    this.ps.cekLogin(this.login_user, this.login_password).subscribe(
    (data) => {
      this.logins = data;
      this.result = data['result'];
      this.id = data['data']['id'];
      this.name = data['data']['name'];
      
    });

    if(this.result == "success")
    {
      this.user_id = this.login_user;
      this.storage.set('user_id', this.user_id);
      this.storage.set('id', this.id);
      this.storage.set('name', this.name);   
    }
    else 
    {
      //alert("Username or password invalid");
      this.login_error = "Username or password invalid";
    }
    
  }

  
  async logout()
  {
    await this.storage.clear();
    alert('anda berhasil Logout');
    return this.router.url === '/';
  }

  addUser() {
    this.ps.newUser(this.register_username, this.register_name,
        this.register_password).subscribe(
        (data) => {
           alert(data['pesan']);
         });
   }


  
  
}
