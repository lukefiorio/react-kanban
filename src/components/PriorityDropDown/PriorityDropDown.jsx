import React from 'react';

const PriorityDropDown = (props) => {
  const { id, name } = props;

  return <option value={id}>{name}</option>;
};

export default PriorityDropDown;
