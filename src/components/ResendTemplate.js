export function resendTemplate(email,name, textArea) {
    return `
    <p>Enviado por:</p><br>
    <p>Email: ${email}</p><br>
    <p>Nombre: ${name}</p><br>
    <p>Mensaje:</p><br>
    <p>${textArea}</p>
    `;
  }