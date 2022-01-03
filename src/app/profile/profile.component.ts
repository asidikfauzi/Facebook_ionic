import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts.service';

//import storage
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  profiles=[];

  id = "";
  username = "";
  name = "";

  listProfile() {
    this.ps.postsListProfile(this.id).subscribe(
        (data) => {
           this.profiles = data;
         });
   }
  

  constructor(public ps:PostsService,
    public route:ActivatedRoute, public storage: Storage) { }

  async ngOnInit() {
    
    this.profiles = this.ps.postsProfile;
    this.id = await this.storage.get('id');
    this.username = await this.storage.get('user_id');
    this.name = await this.storage.get('name');

    this.listProfile();
    
  }

}
