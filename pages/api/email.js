const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);
export default (req, res) => {
  console.log(process.env.SENDGRID_API_KEY);
  const body = JSON.parse(req.body);

  const message = `
  New query received from neotek.com.pk: \r\n
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Phone: ${body.phone}\r\n
  Organisation: ${body.organisation}\r\n
  Message: ${body.message}
  `;

  const data = {
    to: "suleman@neotek.com.pk",
    from: "suleman@neotek.com.pk",
    subject: "New Website Form Message!",
    text: "message",
    html: message.replace(/\r\n/g, "<br>"),
  };
  mail.send(data);

  res.status(200).json({ status: "OK" });
};
