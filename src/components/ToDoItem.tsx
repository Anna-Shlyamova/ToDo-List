import React from 'react';
import { useAppDispatch } from '../hook';
import { toggleComplete, removeTodo, ToDoItemProps } from '../store/todoSlice';


const TodoItem: React.FC<ToDoItemProps>= ({ id, title, completed }) => {
    const dispatch = useAppDispatch();
  
    return (
      <li>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => dispatch(toggleComplete(id))}
        />
        <span>{title}</span>
        <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
      </li>
    );
  };
   
  export default TodoItem;