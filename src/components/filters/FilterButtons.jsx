import React, { useContext } from 'react';
import { TaskContext } from '../../context/taskContext/Context';
import './filter.css';

export const FilterButtons = () => {
  const { changeFilter } = useContext(TaskContext);

  return (
    <div>
      <button className='Filter-Button' onClick={() => changeFilter("all")}>Todas</button>
      <button className='Filter-Button' onClick={() => changeFilter("completed")}>Completadas</button>
      <button className='Filter-Button' onClick={() => changeFilter("pending")}>Pendientes</button>
    </div>
  );
};


