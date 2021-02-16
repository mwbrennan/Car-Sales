import React from 'react';
import { removeFeature } from '../actions/indexAction';
import { connect } from 'react-redux';

const AddedFeature = ({removeFeature, feature}) => {

  const handleClick = () => {
    removeFeature(feature)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleClick} className="button">X</button>
      {feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature);
