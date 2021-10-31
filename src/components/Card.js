import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import cardImage from "../images/blog.jpg";

const Card = ({ card }) => {
  const [id, setId] = useState(-1);
  useEffect(() => {
    setId(card.id);
  }, [card.id]);
  return (
    <div className="col-12 col-md-6 mb-2">
      <Link to={`/posts/${id}`}>
      <div className="card">
        <img className="card-img-top" src={cardImage} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{card.title.substring(0,40)}</h5>
          <div className="d-flex justify-content-between">
            <p className="green-text">
              <span>
                <i class="bi bi-person-fill"></i>
              </span>
              Posted by NinjaTeam
            </p>
            <p className="green-text">
              <span className="px-1">
                <i class="bi bi-calendar"></i>
              </span>
              21 Nov, 2018
            </p>
          </div>
          <p className="card-text">{card.body.substring(0, 150)}</p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
