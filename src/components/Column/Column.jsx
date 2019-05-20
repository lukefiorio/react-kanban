import React from 'react';
import CardList from '../../containers/CardList/CardList';

const Column = (props) => {
  const { cards, status, status_name, statuses, users, priorities } = props;

  return (
    <div className="card-list">
      <h3 className="columnHeader">{status_name}</h3>
      <CardList
        cards={cards}
        cards_status={cards.statuses}
        status={status}
        statuses={statuses}
        users={users}
        priorities={priorities}
        status_name={statuses.name}
        priority_id={priorities.id}
      />
    </div>
  );
};

export default Column;
