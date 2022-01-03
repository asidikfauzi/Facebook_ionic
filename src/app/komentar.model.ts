export class KomentarModel { 
  
    public comment: string;
    public username: string;
    public posts_id: string;

    constructor(comment:string, username:string, posts_id:string) {
        this.comment = comment;
        this.username = username;
        this.posts_id = posts_id;
    }
  }