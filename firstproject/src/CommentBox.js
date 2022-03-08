import React from "react";
import faker from "faker";

function CommentBox(props) {

  console.log(props)

  

    
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <img
            className="right floated mini ui image"
            src={faker.image.image()}
          />
          <div className="header">{props.sname}</div>
          <div className="meta">Year of Establishment: {props.yoe}</div>
          <div className="description">
            Elliot requested permission to view your contact details
          </div>
        </div>
      
      </div>
      
    </div>
  );
}
export default CommentBox;
