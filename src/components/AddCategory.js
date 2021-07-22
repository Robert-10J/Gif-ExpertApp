import React,{ useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCateories }) => {
    
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();  
        if (inputValue.trim().length > 2) {
            setCateories( cats => [ inputValue, ...cats ] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue}
                onChange={ handleInputChange }
                placeholder="Buscar"
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCateories: PropTypes.func.isRequired
 }