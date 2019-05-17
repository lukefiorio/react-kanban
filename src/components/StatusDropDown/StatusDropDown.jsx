import React from 'react';

const StatusDropDown = (props) => {
  const { id, name } = props;

  return <option value={id}>{name}</option>;
};

export default StatusDropDown;
