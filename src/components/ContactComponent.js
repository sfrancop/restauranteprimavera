import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = () => {

  /*----------mailJs-----------*/  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_syxojje', 'template_tqdat6s', form.current, 'user_DF2WTdRMIzNO5oWDHS3ZG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (

    
    <div class="connjunto">

    <div class="texto">
        <p>
        <h1>
            Reserva en linea
        </h1>
        <br/>
        Puedes utilizar este medio para dejar tus dudas, sugerencias u algun reconocimiento hacia el restaurante Primavera, la opinion de nuestros clientes es muy importante
        con el fin de mantener nuestro nivel de excelencia.
        <br/>
        <br/>
        Los datos aqui guardados serán de uso confidencial, respetando las politicas establecidas, sientase libre de opinar y recomendar a su gusto.
        <br/>
        <br/>
        Recuerde llenar todos los campos de texto con datos aceptados conforme al formato, esto con el fin de tener mayor transparencia al momento del proceso y poder
        hacerle llegar su respectiva contestacion.
        <br/>
        <br/>
        Gracias por visitar el restaurante Primavera, estaremos muy atentos a su regreso.
        </p>
    </div>
    <pre class="json" id="form-output"><code></code></pre>
    <form class="formulario"  id="form" ref={form} onSubmit={sendEmail}>
                <div class="form-group">
                    <select class="form-control" id="topic" name="topic" placeholder="Seleccione el servicio"
                        name="servicio" onChange = {event => this.valueToState(event.target)}>
                        <option value="cumpleaños">Celebración de cumpleaños</option>
                        <option value="aniversarios">Aniversarios</option>
                        <option value="infantiles">Fiestas infantiles</option>
                        <option value="declaraciones">Declaraciones o propuestas</option>
                        <option value="despedidas">Despedidas</option>
                    </select>
                </div>

                <br/>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <input class="form-control" type="text" placeholder="Número de personas" required id="people" name="people"/>
                </div>

                <br/>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <input class="form-control" type="text" placeholder="Nombre completo" required id="name" name="name"/>
                </div>

                <br/>

                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Correo electronico" required id="mail" name="mail"/>
                </div>

                <br/>

                <div class="form-group">
                    <input type="email" class="form-control" placeholder="Confirme su correo" required id="reply_to" name="reply_to"  />
                </div>

                <br/>

                <div class="form-group">
                    <input type="tel" class="form-control" placeholder="Teléfono" id="number" name="number" pattern="[0-9]{10}" title="El numro de teléfono ingresado es incorrecto." required/>
                </div>

                <br/>

                <div class="form-group">
                    <input type="datetime-local" name="date" id="date" required/>
                </div>

                <br/>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1"></label>
                    <textarea class="form-control" placeholder="Solicitudes adicionales" id="aditionals" name="aditionals"></textarea>
                </div>

                <br/>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" name="defaultCheck1" required
                        id="terminos"/>
                    <label class="form-check-label" for="defaultCheck1">
                        Acepto términos y condiciones.
                    </label>
                </div>

                <br/>

                <button onclick="sendMail()" type="submit" class="btn btn-secondary" id="enviar">Enviar</button>
    </form>
    </div>
  );
};

export default ContactUs;