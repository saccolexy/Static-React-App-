// Import React to use JSX syntax and React features in this file.
import React from 'react';

// Define a TypeScript interface 'TodoItemProps' to specify the types of props
// this component will receive. In this case, 'task' is a string representing the task,
// and 'completed' is a boolean indicating whether the task is marked as done.
interface TodoItemProps {
  task: string;      // The task description
  completed: boolean; // Boolean flag indicating if the task is completed
}

// Define the 'TodoItem' functional component using React.FC typing.

const TodoItem: React.FC<TodoItemProps> = ({ task, completed }) => {
  return (
    // The <li> (list item) element represents a single task in the to-do list.
    <li>
      {/* 
        The <span> element displays the task. 
        The 'style' attribute applies inline CSS to the <span>. 
        If 'completed' is true, a line-through style (strikethrough) is applied, 
        indicating the task is completed. Otherwise, no text decoration is applied.
      */}
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {task}  {/* Render the task string */}
      </span>

      {/* 
        'Edit' button allows the user to edit the task. Currently, this is a static button 
        with no attached functionality, but in a dynamic version, it would trigger an edit action.
      */}
      <button>Edit</button>

      {/* 
        'Delete' button allows the user to delete the task. (static)
      */}
      <button>Delete</button>
    </li>
  );
};

// Export the 'TodoItem' component as the default export of this file.
// This makes it available for import and use in other components (e.g., TodoList).
export default TodoItem;
