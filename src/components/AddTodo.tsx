// Import the React library to use JSX syntax and React features in this file.
import React from 'react';

// Define a functional component named AddTodo
const AddTodo: React.FC = () => {
  // Return the JSX structure that represents the UI of the component.
  return (
    <div>
      {/* 
        An input field of type 'text' that allows the user to enter a new to-do task.
      */}
      <input type="text" placeholder="Add a new task" />
      
      {/* 
        A button labeled "Add Task". 
      */}
      <button>Add Task</button>
    </div>
  );
};

// Export the AddTodo component as the default export of this file.
// This makes the component reusable in other parts of the application
export default AddTodo;
