import { Component, OnInit } from '@angular/core';

//import servicenya
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {

  posts=[];

  //json:string = '';

  listPosts(){
    this.ps.postsList().subscribe(
      (data) => {
        this.posts = data;
      });
  }
 

  constructor(public ps:PostsService) { }

  ngOnInit() {
    this.posts = this.ps.postsUpload;
    this.listPosts();
  }

}
