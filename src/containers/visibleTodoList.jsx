import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import todoList from '../components/todoList.jsx';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case `SHOW_ALL`:
      return todos;
    case `SHOW_ACTIVE`:
      return todos.filter(t => !t.completed);
    case `SHOW_COMPLETED`:
      return todos.filter(t => t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

const visibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(todoList);

export default visibleTodoList;
