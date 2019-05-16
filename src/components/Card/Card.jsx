import React from 'react';

const Card = (props) => {
  const { title, body } = props;
  // const { title, body, priority_id, status_id, created_by, assigned_to } = props;

  return (
    <div className="card">
      <div>{title}</div>
      <div>{body}</div>
      {/* <div>{priority_id}</div>
      <div>{status_id}</div>
      <div>{created_by}</div>
      <div>{assigned_to}</div> */}
    </div>
  );
};

export default Card;
