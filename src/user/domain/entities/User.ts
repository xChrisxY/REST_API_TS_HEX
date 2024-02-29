export class User {

  constructor(

    public username: string,
    public password: string,
    public email: string,
    public jwt?: string,

  ) { }

  setJWT(jwt: string) {
    this.jwt = jwt;
  }
}
