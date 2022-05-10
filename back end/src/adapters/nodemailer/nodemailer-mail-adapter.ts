import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "9d76c1b9519d55",
      pass: "7031d04b387d64"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject,body}: SendMailData) {
      await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'William lisboa <williamlisboa8086@gmail.com>',
        subject,
        html: body
        
    })
  }
}