// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");
const key = process.env.SENDGRID_KEY;
sgMail.setApiKey(key);

type Data = {
  status: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);
  console.log(body);
  console.log(key);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: "liamtc@icloud.com",
    from: "contact@liamcullen.design",
    subject: "New Contact from Website",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  sgMail.send(data).then(
    () => {},
    (error: any) => {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  );

  res.status(200).json({ status: "Ok" });
}
