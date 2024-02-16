// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Feature({ img, title, id }) {
  return (
    <div id="box-1" className="feature group">
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover object-center"
      />
      <div className="item-gradient" />
      <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 group-hover:bg-opacity-40">
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <span className="cursor-pointer">
            <Link to={`/features/${id}`} className="hover:text-cadetBlue">
              read more...
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

Feature.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Feature;
