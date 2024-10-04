// Import React to use JSX syntax and React functionalities in this file.
import React from 'react';
// Import the TodoItem component, which is used to render individual tasks in the list.
import TodoItem from './TodoItem';

// Define a TypeScript interface 'TodoListProps' to specify the structure of props this component will receive.
// 'todos' is an array of objects where each object represents a to-do item with the following properties:
// - id: a unique number for each task (used for keying)
// - task: a string describing the task
// - completed: a boolean indicating whether the task is marked as done
interface TodoListProps {
  todos: { id: number, task: string, completed: boolean }[];
}

// Define the 'TodoList' functional component using React.FC to type it as a functional component.
// It accepts 'todos' as props, which are passed in as an array of to-do items.
const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  // The component returns a <ul> (unordered list) element that wraps all the to-do items.
  return (
    <ul>
      {/* 
        The 'todos.map' function iterates over the array of to-do items.
        For each 'todo' object in the array, we create a <TodoItem> component.
        The key prop is necessary for React to track each item in the list efficiently during rendering.
        We pass 'task' and 'completed' from each 'todo' object as props to the TodoItem component.
      */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}          // Unique 'id' for each todo item, used by React for optimal list rendering
          task={todo.task}        // The 'task' string is passed as a prop to the TodoItem component
          completed={todo.completed}  // The 'completed' boolean is passed as a prop to determine the task's status
        />
      ))}
    </ul>
  );
};

// Export the TodoList component as the default export, making it available for use in other parts of the app.
export default TodoList;
