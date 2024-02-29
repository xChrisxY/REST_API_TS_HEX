import * as amqp from 'amqplib';
import { INotification } from '../../../domain/services/INotificationAuth';

export class RabbitMQService implements INotification {

  private url: any;
  private exch : any;

  constructor(){

    this.url = 'amqps://suowzuyq:iT10HQrIzfRKfoyRHIS6RZi3ViZ9gTMy@shrimp.rmq.cloudamqp.com/suowzuyq';
    this.exch = 'upchiapas.as';

  }

  async sendMessage(message: string): Promise<void> {
      
    try {
      
      const connection = await amqp.connect(this.url);
      const channel = await connection.createChannel();


      let success = await channel.publish(this.exch, "", Buffer.from(message));

      if (success) console.log(message);

      await channel.close();
      await connection.close();

      //return status 
    } catch (error) {

      console.log('error al momento de enviar un mensaje');

    }

  }

}
