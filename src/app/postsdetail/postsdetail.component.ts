import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { PostsService } from '../posts.service';
import { PostsModel } from '../posts.model';

import { Storage } from '@ionic/storage';
import { KomentarModel } from '../komentar.model';


@Component({
  selector: 'app-postsdetail',
  templateUrl: './postsdetail.component.html',
  styleUrls: ['./postsdetail.component.scss'],
})
export class PostsdetailComponent implements OnInit {

  //STORAGE
  username = "";
  id = "";

  //POST DETAIL
  url:string = "";
  caption:string = "";
  users_id:string = "";

  //KOMENTAR Muncul
  komentar = [];
  
  //komentar tambah
  isiKomen = "";

  listKomentar() {
    this.ps.postsListKomentar(this.url).subscribe(
      (data)=> {
        this.komentar = data;
      }
    );
  }

  addKomentar() {
    this.ps.newKomentar(this.isiKomen, this.id,
        this.url).subscribe(
        (data) => {
           alert(data['pesan']);
         });
   }
  
  constructor(public ps:PostsService,
    public route:ActivatedRoute, public storage:Storage) { }

  async ngOnInit() {
    var id:number=this.route.snapshot.params['id'];

    var pm:PostsModel = this.ps.postsUpload[id];
    this.url=pm.url;
    this.caption=pm.caption;
    this.users_id=pm.users_id;

    //storage
    this.komentar = this.ps.postsKomentar;
    this.id = await this.storage.get('id');
    this.username = await this.storage.get('user_id');

    this.listKomentar();
  }
  

}
