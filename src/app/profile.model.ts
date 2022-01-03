export class ProfileModel { 

    public url: string;
    public caption: string;
    public username: string;

    constructor(url:string, caption:string, username:string) {
      this.url = url;
      this.caption = caption;
      this.username = username;
    }
  }