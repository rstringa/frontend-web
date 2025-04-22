export function resendTemplate(email,name) {
    return `
    <p>Enviado por:</p><br>
    <p>Email: ${email}</p><br>
    <p>Nombre: ${name}</p><br>
    <p>Mensaje:</p><br>
    <p>${text}</p>
    `;
  }