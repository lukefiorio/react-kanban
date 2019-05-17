import React from 'react';

const UserDropDown = (props) => {
  const { id, first_name, last_name } = props;

  return (
    <option value={id}>
      {first_name} {last_name}
    </option>
  );
};

export default UserDropDown;
