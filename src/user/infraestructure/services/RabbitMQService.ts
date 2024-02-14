import * as amqp from 'amqplib';
import { IORabbitInterface } from '../../domain/repository/IRabbitRepository';

export class RabbitMQService implements IORabbitInterface {

  async sendMessage(message: string): Promise<void> {
      
    try {
      
      const mensaje = `${message} has been loggin`;

      const connection = await amqp.connect('amqps://suowzuyq:iT10HQrIzfRKfoyRHIS6RZi3ViZ9gTMy@shrimp.rmq.cloudamqp.com/suowzuyq');
      const channel = await connection.createChannel();
      const ex = 'amq.direct';

      channel.publish(ex, "", Buffer.from(mensaje));

      await channel.close();
      await connection.close();

      console.log('Mensaje publicado: ' + mensaje);

    } catch (error) {

      console.log('error al momento de enviar un mensaje');

    }

  }

}
