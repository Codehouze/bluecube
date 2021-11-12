import React from "react";
import Card from "./Card";
import Profile from "../asset/image/th.jpeg";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        {/* create a reusable card component */}
        <div className="search">
          <svg
          // className="search_lens"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input type="text" name="search" placeholder="Find Something..." />
          <button>Search</button>
        </div>
        <div className="notification">
          <div className="notification_bell">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="56"
              fill="blue"
              class="bi bi-bell-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
            </svg>
            <span class="num-count">3</span>
          </div>
          <div className="profile_picture">
            <img
              src={Profile}
              alt="profile_picture"
              className="profile_picture"
            />
          </div>
          <div>
            <select className="name" >
              <option value="Following">Blessing</option>
            </select>
          </div>
        </div>
        <div className="filter">
          <div>
            <select className="dropdown">
              <option value="World">World</option>
            </select>
          </div>
          <div>
            <select className="dropdown">
              <option value="Following">Following</option>
            </select>
          </div>
          <div>
            <select className="dropdown">
              <option value="Popular">Popular</option>
            </select>
          </div>
          <div>
            <select className="dropdown">
              <option value="Post">Post</option>
            </select>
          </div>
          <div>
            <select className="dropdown">
              <option value="Gender">Gender</option>
            </select>
          </div>
          <div>
            <select className="dropdown">
              <option value="Location">Location</option>
            </select>
          </div>
          <div>
            <select className="dropdown">
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
