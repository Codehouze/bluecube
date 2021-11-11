import React from "react";
import Card from "./Card";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        {/* create a reusable card component */}
        <div className="search">
          <input type="text" name="search" placeholder="Find Something..." />
          <button>Search</button>
        </div>
       <div className="filter">
        <div>
          <select className="dropdown" >
            <option value="World">World</option>
          </select>
        </div>
        <div>
          <select className="dropdown" >
            <option value="Following">Following</option>
          </select>
        </div>
        <div>
          <select className="dropdown" >
            <option value="Popular">Popular</option>
          </select>
        </div>
        <div>
          <select className="dropdown" >
            <option value="Post">Post</option>
          </select>
        </div>
        <div>
          <select className="dropdown" >
            <option value="Gender">Gender</option>
          </select>
        </div>
        <div>
          <select className="dropdown" >
            <option value="Location">Location</option>
          </select>
        </div>
        <div>
          <select className="dropdown" >
            <option value="Profession">Profession</option>
          </select>
        </div>
        </div>

        <Card />
      </div>
    );
  }
}

export default Main;
