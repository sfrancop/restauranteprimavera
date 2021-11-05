import React from 'react';
import Comment from "./Comment"

class comments extends React.Component {

    render()
    {
      
      return this.props.json.map(

            comment =>  <Comment comment = {comment} key = {comment.name} />

          )
    }     
  }

export default comments;