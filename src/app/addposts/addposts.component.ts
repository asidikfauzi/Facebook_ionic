import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-addposts',
  templateUrl: './addposts.component.html',
  styleUrls: ['./addposts.component.scss'],
})
export class AddpostsComponent implements OnInit {

  constructor(public storage: Storage, public ps:PostsService) { }

  async ngOnInit() {
    this.user_id = await this.storage.get('id');
  }
  
  id = "";
  url = "";
  caption = "";
  user_id = "";

  file_path: string = "img:///...";

  addPhotos() {
    this.ps.newPosts(this.url, this.caption,
        this.user_id).subscribe(
        (data) => {
           alert(data['pesan']);
         });
   }


  

}
