import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const resend = new Resend("re_NBu6q1TF_26gjqv2i2JGqTBsnZkk6wCqd");
const POST = async ({ params, request }) => {
  const body = await request.json();
  const { to, from, reply_to, html, subject, text } = body;
  if (!to || !from || !html || !subject || !text) {
    return new Response(null, {
      status: 404,
      statusText: "Did not provide the right data"
    });
  }
  const send = await resend.emails.send({
    from,
    reply_to,
    to,
    subject,
    html,
    text
  });
  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data
      }),
      {
        status: 200,
        statusText: "OK"
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error
      }),
      {
        status: 500,
        statusText: "Internal Server Error"
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
