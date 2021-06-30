import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import '../style/style.css';
import '../style/Rating.css';
import ReactTextCollapse from 'react-text-collapse';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import Notify from '../Notification/Notify';
import { addfavorite, removefavorite } from '../reducers/findSlice';

const SingleHouse = ({
  id, name, image, price, rank, description,
}) => {
  const rate = (rank / 5) * 100;
  const TEXT_COLLAPSE_OPTIONS = {
    collapse: false,
    collapseText: <FaAngleDown />,
    expandText: <FaAngleUp />,
    minHeight: 50,
    maxHeight: 100,
    textStyle: {
      color: 'gray',
      fontSize: '20px',
      float: 'center',
      textAlign: 'center',
    },
  };
  const dispatch = useDispatch();
  const { singlehouse, isAdded } = useSelector((state) => state.houses);
  const handleAddFavorite = (event) => {
    event.preventDefault();
    const userid = id;
    const houseid = singlehouse.id;
    const favorite = {
      user_id: userid,
      house_id: houseid,
    };
    if (isAdded) {
      dispatch(removefavorite(id));
      Notify();
    } else {
      dispatch(addfavorite(favorite));
      Notify();
    }
  };
  return (
    <>
      <div className="singlehouse" data-testid="house">
        <img className="singleimage" src={image} alt={image} />
        <div className="description">
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
      <div className="collapsible">
        <h6>About this listing</h6>
        <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
          <p>
            {description}
          </p>
        </ReactTextCollapse>
      </div>

      <button
        type="button"
        className="appbtn"
        onClick={handleAddFavorite}
      >
        { isAdded ? 'Remove from Favourite'
          : 'Add To Favourite'}
      </button>
    </>
  );
};

SingleHouse.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
export default SingleHouse;
