import React from 'react';

const Card = (props) => {
  // props are inherited from the parent
  // object destructuring. takes a key value pair off of an object and stores it to a variable.
  // this breaks down to:
  // const title = props.title;
  // const body = props.body;
  // gets run
  // console.log('-----Card instantiated. props:', props);
  const { title, body, assigned_to, priority } = props;

  // const { title, body, priority_id, status_id, created_by, assigned_to } = props;

  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      <div className="cardBody">{body}</div>
      <div className={`cardPriority ${priority}-cardPriority`}>Priority: {priority}</div>
      <div className="cardAssignedTo">
        Assigned to: {assigned_to.first_name} {assigned_to.last_name}
      </div>
      {/* <div>{created_by}</div> */}
    </div>
  );
};

export default Card;
