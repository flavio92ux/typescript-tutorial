import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Flavio', email: 'flavio.win@gmail.com' },
];

export default {
  async index(_req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    const response = emailService.sendMail({
      to: {
        name: 'Flavio Filho',
        email: 'flavio.win@gmailcom'
      },
      message: {
        subject: 'Welcome to the system',
        body: 'corpo da mensagem'
      },
    });

    return res.send(response);
  }
};