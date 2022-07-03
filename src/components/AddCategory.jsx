import React, { useState } from 'react'

const AddCategory = ({onNewCategory}) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length >= 2) {
            // setCat(categs => [inputValue, ...categs]);
            onNewCategory(inputValue.trim());
            setInputValue('');
        }
    }

  return (
    <>
        <form onSubmit={handleSubmit}>

            <input type="text" value={inputValue} onChange={handleInputChange}/>
            <button type="submit" id="add-button">Add</button>

        </form>
        

    </>
  )
}

export default AddCategory