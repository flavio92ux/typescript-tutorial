interface IMailTo {
  name: string;
  email: string;
};

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: Array<string>;
};

interface MessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

// Data transfer object (DDD)

class EmailService {
  sendMail({ to, message }: MessageDTO) {
    return `Email enviado para ${to.name}: ${message.body}`;
  }
}

export default EmailService;