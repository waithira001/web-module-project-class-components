import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },

  {
    task: 'Book Hotel Resort for Hawaii',
    id: 1528817084358,
    completed: false,
  },

  {
    task: ' Book Flight for Hawaii',
    id: 1528817077288,
    completed: false
  },
  {
    task: 'Shop for Hawaii',
    id: 1528817077246,
    completed: false
  },
  {
    task: 'Read New Chapter',
    id: 1528817077226,
    completed: false
  },
  {
    task: 'Cook ChickenWings',
    id: 1528817077280,
    completed: false
  },
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      list:list
    }
  }

  toggleFinished = (todoId) => {
    const updatedTodoList = this.state.list.map(todo => {
      if (todo.id === todoId) {
        return {...todo, finished: !todo.finished};
      }
      else{
        return todo;
      }
    });
    this.setState({
      ...this.state,
      list: updatedTodoList
    });
}

addTodo = (todoName) => {
  this.setState({
    ...this.state,
    list: [
      ...this.state.list,
      {
        task: todoName,
        id: Date.now(),
        finished: false
      }
    ]
  })
}

clearFinished = () => {
  this.setState({
    ...this.state,
    list: this.state.list.filter(todo => !todo.finished)
  })
}
  
  
render() {
  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoForm handleAddItem={this.handleAddItem} />
      <div>
      <TodoList handleClear={this.handleClear} handleToggle={this.handleToggle} todo={this.state.todo}/>
      </div>
    </div>
  );
}
}
export default App;
const rootElement = document.getElementById('root');
  ReactDOM.render(<App />, rootElement);
