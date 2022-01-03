export class RegisterModel { 

    public username: string;
    public name: string;
    public password: string;

    constructor(username:string, name:string, password:string) {
      this.username = username;
      this.name = name;
      this.password = password;
    }
  }