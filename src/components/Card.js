import React from "react";
import Image from "../components/Image";
import { LoadImages } from "../components/api";

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="flex-container">
        <Photos />
        </div>
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

const Photos = () => {
  const data = LoadImages();
  console.log(data);

  return(
    
data.map((img) => <Image src={img.urls.thumb} className="Img" />


))
};

export default Card;
