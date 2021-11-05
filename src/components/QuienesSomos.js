import React from 'react';
import Imagen from "./images/foto4@2x.png"

class QuienesSomos extends React.Component {

    render()
    {
      
      return(
        <div class="parrafo">
            <img src={Imagen} class="" alt="" width="40%"/>
            <p>
            <h1>
                ¿Quienes somos?
            </h1>
            <br/>
            Somos una compañia de buffets que lleva mas de 10 años en el mercado innovando el mundo de la comida al aire libero
            representando no solo a un negocio, sino a una familia, puesto que nuestro ambiente laboral refleja lo buenos que son nuestros
            productos y asi mismo el cliente se siente plenamente satisfecho con el rendimiento por parte del restaurante Primavera.
            <br/>
            <br/>
            Contamos con una amplia carta, la cual denota el alcance que tenemos en cuanto a banquetes debido a que no solo nos concentramos
            en la comida colombiana, sino que nos expandimos al resto del planeta con el fin de atraer nuevas sensaciones a todos nuestros clientes
            y que tanto nacionales como extrangeros puedan disfrutar de nuestros platos.
            <br/>
            <br/>
            Nuestro lema es "Restaurante Primavera, donde comer es todo un placer" debido a que jugamos con todas las sencaciones de nuestros comensales, 
            logrando que se lleven no solo el recuerdo del sabor tan exquisito de nuestros platos, sino aquel suspiro de que son felices desde 
            el primer bocado que prueban de nuestros deliciosos manjares.
            <br/>
            <br/>
            Como compañia en crecimiento, estamos dispuestos a brindar oportunidades de crecimiento a todo aquel que haga las cosas con amor, porque creemos firmemente
            en que la clave del exito esta en el amor y la pasion con la que se hagan las cosas, y eso es lo que reflejamos en cada aperitivo que sale de 
            nuestras cocinas. 
            </p>
        </div>
      ) 
          
    }     
  }

export default QuienesSomos;