export interface IJWTRepository {

  sign(payload: any, expiresIn: string): Promise<string>;
  verify(token: string): Promise<any>;

}
