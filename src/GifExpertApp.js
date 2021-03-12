import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories,setCategories] = useState(['cats']);
    
    // const handleAdd = () => {
    //     // setCategories(...categories,'Vanesa la condesa');   //no funca bien
    //     setCategories(cats=>[...cats, 'Vanesa la condesa']);
    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                { 
                    // <li key={ category }>{ category }</li>
                    categories.map(category => (
                        <GifGrid
                        key = {category}
                        category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
