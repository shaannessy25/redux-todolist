import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import './App.css';

import { loadState, saveState } from './helpers'

import NewTodo from './components/todo-new'
import TodoList from './components/todo-list'
import TodoStats from './components/TodoStats'

const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Todos ++</h1>
        <NewTodo />
        <TodoStats />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
