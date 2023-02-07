import React from "react";

export const Contacto = () => {
  return <div>
    <form className="contact">
      <input type="text" placeholder="Nombre completo"/>
      <input type="email" placeholder="Email"/>
      <textarea placeholder="Motivo de contacto"/>
      <input type="submit" value="Enviar"/>
    </form>
  </div>;
};
