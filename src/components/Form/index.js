import React from 'react';
import './Form.css'
import PropTypes from 'prop-types';

import { FaPlus, FaEdit } from 'react-icons/fa';

export default function Form({handleSubmit,handleChange,novaTarefa,indexEdicao}) {
  return(
    <form onSubmit={handleSubmit} action='#' className='form'>
      <input
        onChange={handleChange}
        type='text'
        value={novaTarefa}
      />
      <button type='submit'>
        {indexEdicao ==-1 ? <FaPlus/>:<FaEdit/>}
      </button>
    </form>
  );
}

Form.propTypes ={
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
  indexEdicao: PropTypes.number.isRequired,
}
