import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/style.css';
import '../style/Rating.css';

const House = ({
  name, image, price, rank,
}) => {
  const rate = (rank / 5) * 100;
  return (
    <Link to="./SingleHouseList">
      <div className="house">
        <img className="image" src={image} alt={image} />
        <div className="describe">
          <div className="name">
            {name}
            <div>
              {' '}
              <span className="star-wrapper">
                <span className="stars" style={{ width: `${rate}%` }} />
              </span>
            </div>
          </div>
          <div className="price">
            $
            {price}
            <div>per month</div>
          </div>

        </div>
      </div>
    </Link>
  );
};

House.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};
export default House;
