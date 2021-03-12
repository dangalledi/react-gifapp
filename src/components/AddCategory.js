import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setinputValue] = useState('');

    const handleImputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();

        if ( inputValue.trim().length > 2 ){
            // console.log('Submit hecho')
            setCategories( cats=> [inputValue,...cats]);
            setinputValue('');
        }        
    }

    return (
        <div>
            <>
            <form onSubmit={handleSubmit}>
                <input 
                    type = "text"
                    value={inputValue}
                    onChange={handleImputChange}
                />
            </form>
            </>
            
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}