import React from 'react';
import './Tarefas.css'
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose} from 'react-icons/fa';

export default function Form({handleEdit,handleDelete,tarefas}) {
  return(
    <ul className='tarefas'>
      {tarefas.map((tarefa, index) =>(
        <li key={tarefa}>
            {tarefa}
            <span>
            <FaEdit
              onClick={(e)=>{handleEdit(e,index)}}
              className='edit'
            />
            <FaWindowClose
              onClick={(e)=>{handleDelete(e,index)}}
              className='delete'
            />
            </span>
          </li>
      ))}
    </ul>
  );
}

Form.propTypes ={
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
}
