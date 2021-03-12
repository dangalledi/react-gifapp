// import React, { useState, useEffect } from 'react'
import React from 'react';
//import { getGift } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs(category);

    // useEffect(()=>{
    //     getGift(category)
    //         .then(setImages)
    // }, [category])

    return (
        <>
        <h3>{category}</h3>

        {loading && <p>Loading</p>}

        {/* {loading ? 'Cargando...': 'Data cargada'} */}
        <div className="card-grid">            
            {
                images.map((img) => ( 
                    <GifGridItem 
                        key = {img.id} 
                        {...img}
                        />
                ))
            }
            
        </div>
        </>
    )
}
