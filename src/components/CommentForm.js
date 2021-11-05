import React from 'react';
import commentsJson from "../comments.json"

export default class CommentForm extends React.Component {



    state = {
                name: "",
                comment: "",
                comments: commentsJson
            }

    onSubmit = e => {
        this.props.addComment(this.state.name, this.state.comment)
        e.preventDefault();
        console.log(this.state)
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


      

    render()
    
    { 
      return(

          <div class="parrafo">
              

            <br/>

            <form onSubmit={this.onSubmit}>

                <input  
                        type = "text"
                        placeholder = "Escribe tu nombre"
                        onChange = {this.onChange}
                        value = {this.state.name}
                        name = "name">
                </input>

                <br/>

                <textarea
                            placeholder = "Escriba su comentario" 
                            onChange = {this.onChange}
                            value = {this.state.comment}
                            name = "comment">
                </textarea >

                <br/>

                <button
                        type="submit"
                        id = "checkbox">
                             Publicar
                </button>

            </form>

            <br/>
          </div>

        ) 
          
    }     
    
}
