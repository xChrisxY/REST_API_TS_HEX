import * as amqp from 'amqplib';
import { INotification } from '../../domain/services/INotificationAuth';

export class RabbitMQService implements INotification {

  private url: any;
  private exch : any;

  constructor(){

    this.url = process.env.URL;
    this.exch = process.env.EXCH;

  }

  async sendMessage(message: string): Promise<void> {
      
    try {
      
      const notification = {
        
        success : true,
        message : `${message} has been loggin`
      };
      
      const connection = await amqp.connect(this.url);
      const channel = await connection.createChannel();


      let success = await channel.publish(this.exch, "", Buffer.from(JSON.stringify(notification)));

      //let status = await channel...
      if (success) console.log('Mensaje publicado: ' + notification.message);

      await channel.close();
      await connection.close();

      //return status 
    } catch (error) {

      console.log('error al momento de enviar un mensaje');

    }

  }

}
