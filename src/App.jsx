import React from 'react';
import { TaskProvider } from './context/taskContext/Context';
import { Header } from './components/header/Header';
import {TaskForm} from './components/taskForm/TaskForm';
import {TaskList} from './components/taskList/TaskList';
import {FilterButtons} from './components/filters/FilterButtons';

export const App = () => {
  return (
    <TaskProvider>
      <Header/>
      <div className='bodyDiv'>
        <TaskForm />
        <FilterButtons />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

