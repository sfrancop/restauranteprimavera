import React from 'react';

import Testimonio1 from "./images/testimonio1.png"
import Testimonio2 from "./images/testimonio2.png"
import Testimonio3 from "./images/testimonio4.png"
import Testimonio4 from "./images/testimonio23png.png"



class comments extends React.Component {
    

    render()
    {

      
      return(
          <div class="container">
                  <div class="row">
                      <div class="col">
                          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                              <div class="carousel-inner">
                                  <div class="carousel-item active">
                                      <img class="d-block w-100" src={Testimonio1} alt="Second slide" />
                                  </div>
                                  <div class="carousel-item">
                                      <img class="d-block w-100" src={Testimonio2} alt="Second slide" />
                                  </div>
                                  <div class="carousel-item">
                                      <img class="d-block w-100" src={Testimonio3} alt="Third slide" />
                                  </div>
                                  <div class="carousel-item">
                                      <img class="d-block w-100" src={Testimonio4} alt="Third slide" />
                                  </div>
                              </div>
                              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                  <span class="sr-only">Previous</span>
                              </a>
                              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                  <span class="sr-only">Next</span>
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
      ) 
          
    }     
  }

export default comments;