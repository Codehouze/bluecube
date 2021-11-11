import React from "react";
import Img from "../asset/image/Nkem_3.jpeg";

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        {/* create a reusable card component */}
        
          <img src={Img} className="Img_holder"></img>
      
        <div>
          <h1>William,28</h1>
          <p>New york</p>
        </div>
        <div className="Card-button">
          <button className="Button1">Like </button>
          <button className="Button2">Dislike</button>
        </div>
      </div>
    );
  }
}

export default Card;
