import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState();
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        const inputVal = inputValue || '';
        if (inputVal.trim().length <= 1) return;
        
        //setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputVal.trim());
    }
  return (
    <form onSubmit={onSubmit} aria-label="form">
        <input 
            type="text" 
            placeholder="Buscar gifs" 
            value={inputValue || ''}
            onChange={onInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}