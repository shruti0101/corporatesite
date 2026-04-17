import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const location = formData.get("location");
    const experience = formData.get("experience");
    const feild = formData.get("feild");
    const linkedin = formData.get("linkedin");
    const message = formData.get("message");

    const file = formData.get("resume");

    // convert file to buffer
    let fileBuffer = null;
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      fileBuffer = Buffer.from(bytes);
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Job Application",
      html: `
        <h3>New Application from Corporate Inquirybazaar website career page</h3>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Experience:</b> ${experience}</p>
        <p><b>Area of Interest:</b> ${feild}</p>
        <p><b>LinkedIn:</b> ${linkedin}</p>
        <p><b>Message:</b> ${message}</p>
      `,
      attachments: fileBuffer
        ? [
            {
              filename: file.name,
              content: fileBuffer,
            },
          ]
        : [],
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}