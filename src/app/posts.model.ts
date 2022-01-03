export class PostsModel { 

    public url: string;
    public caption: string;
    public users_id: string;

    constructor(url:string, caption:string, users_id:string) {
      this.url = url;
      this.caption = caption;
      this.users_id = users_id;
    }
  }