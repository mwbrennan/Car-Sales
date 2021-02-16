import React from 'react';
import { addFeature } from '../actions/indexAction';
import { connect } from 'react-redux';

const AdditionalFeature = ({addFeature, feature}) => {
  const handleClick = () => {
    addFeature(feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">Add</button>
      {feature.name} (+{feature.price})
    </li>
  );
};

export default connect(null, { addFeature })(AdditionalFeature);
