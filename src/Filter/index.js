import React from 'react';

import './Filter.css';

const Filter = ({ todos, setTodosFilter }) => {
  const onClickFilter = (ev) => {
    setTodosFilter(ev.target.dataset.filter);
    toggleActive(ev);
  };

  const toggleActive = (ev) => {
    let elementToToggle = ev.target;
    let items = ev.target.parentElement.children;
    [...items].forEach((item) => item.classList.remove('filter-active'));
    elementToToggle.classList.add('filter-active');
  };

  return (
    <div className='filter'>
      <span data-filter='all' className='filter-active' onClick={onClickFilter}>
        All
      </span>
      <span data-filter='active' onClick={onClickFilter}>
        Active
      </span>
      <span data-filter='completed' onClick={onClickFilter}>
        Completed
      </span>
    </div>
  );
};

export default Filter;
