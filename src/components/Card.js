import React from "react";
import Img from "../asset/image/Nkem_3.jpeg";

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        {/* create a reusable card component */}

        <img src={Img} className="Img_holder"></img>
        <div className="card_info">
          <div className="card_name">
            <h3>William,28</h3>
            <p>New york</p>
          </div>
          <div className="card-button">
            <button className="Button1">Like </button>
            <button className="Button2">Dislike</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
