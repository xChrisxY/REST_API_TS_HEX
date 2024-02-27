export interface IEncryptService {

      encodePassword(password : string): Promise<string>;
      authPassword(password : string, hash: string): Promise <boolean>;

}