import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images,loading} = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__pulse">{category}</h3>
            { loading && <p>Loading</p>}
            {/* { loading ? <p>Loading</p>} : null*/}
            <div className="card-grid">
                {
                    // Cuando hago un map le pongo () en lugar de {}
                    // para hacer un return implícito
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
