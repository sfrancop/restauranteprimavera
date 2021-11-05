import React from 'react';

class comments extends React.Component {

    render()
    {
      
      return(
          <div>
              {this.props.comment.name}
          </div>
      ) 
          
    }     
  }

export default comments;