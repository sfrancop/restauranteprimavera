import React from 'react';

import Persona1 from "./images/persona1.jpg.png"
import Persona2 from "./images/persona2.png"
import Persona3 from "./images/persona3.png"
import Persona4 from "./images/persona4.png"
import Persona5 from "./images/persona5.png"
import Persona6 from "./images/persona6.png"

class comments extends React.Component {

    render()
    {
      
      return(
        <div class="trabajadores">

        <section class="w-100">
            <div class="row w-75 mx-auto" id="servicios-fila-1">
                <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
                    <img src={Persona1} class="rounded-circle" alt="desarrollo" width="180" height="180"/>

                    <div>
                        <h3 class="fs-5 mt-4 px-4 pb-1">Juan Gómez</h3>
                        <p class="px-4">Desarrollador web</p>
                    </div>

                </div>

                <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start  my-5 icono-wrap">
                    <img src={Persona2} class="rounded-circle" alt="concepto" width="180" height="180"/>

                    <div>
                        <h3 class="fs-5 mt-4 px-4 pb-1 icono-wrap">Luis Cardona</h3>
                        <p class="px-4">Chef</p>
                    </div>
                </div>
            </div>

            <div class="row w-75 mx-auto" id="servicios-fila-1">
                <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
                    <img src={Persona3} class="rounded-circle" alt="desarrollo" width="180" height="180"/>

                    <div>
                        <h3 class="fs-5 mt-4 px-4 pb-1">Maria Veloza</h3>
                        <p class="px-4">Administradora</p>
                    </div>

                </div>

                <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start  my-5 icono-wrap">
                    <img src={Persona4} class="rounded-circle" alt="concepto" width="180"
                        height="180"/>

                    <div>
                        <h3 class="fs-5 mt-4 px-4 pb-1 icono-wrap">Sergio Franco</h3>
                        <p class="px-4">Director de comunicaciones</p>
                    </div>
                </div>
            </div>


            <div class="row w-75 mx-auto mb-5" id="servicios-fila-2">
                <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start  my-5 icono-wrap">
                    <img src={Persona5} class="rounded-circle" alt="comunicaciones" width="180"
                        height="180"/>

                    <div>
                        <h3 class="fs-5 mt-4 px-4 pb-1">Ramiro Garcia</h3>
                        <p class="px-4">Jefe de recursos humanos</p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-start my-5 icono-wrap">
                    <img src={Persona6} class="rounded-circle" alt="seo" width="180" height="180"/>

                    <div>
                        <h3 class="fs-5 mt-4 px-4 pb-1">Raul Hernandez</h3>
                        <p class="px-4">Analista de datos</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
      ) 
          
    }     
  }

export default comments;