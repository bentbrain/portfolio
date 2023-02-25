// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Email from "@/emails/contact";
import { render } from "@react-email/render";
const sgMail = require("@sendgrid/mail");
const key = process.env.SENDGRID_KEY;

sgMail.setApiKey(key);

console.log(key);

type Data = {
  status: string;
  error?: String;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);

  const html = render(
    <Email name={body.name} message={body.message} email={body.email} />,
    {
      pretty: true,
    }
  );

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: "liamtc.beechmont+contact@gmail.com",
    from: "liam@liamcullen.design",
    subject: `New Contact from Website from ${body.name}`,
    text: message,
    html: html,
  };

  try {
    await sgMail.send(data).then(
      () => {},
      (error: any) => {
        return error;
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    );
  } catch (error: any) {
    // console.log(error);
    return res
      .status(error.statusCode || 500)
      .json({ status: "error", error: error.message });
  }

  res.status(200).json({ status: "Ok" });
}
