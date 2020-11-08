import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto'])

    // YA NO ES NECESARIO TODO ESTO CUANDO ENVIAMOS EL SETCATEGORIES COMO PARÁMETRO
    // const handleAdd = (entrada) => {
    //     // CUALQUIER FORMA ESTÁ BIEN
    //     // La primera es la mía
    //     // setCategories(categories.concat(['Dororo']));

    //     // Buena solución
    //     // setCategories([...categories, 'Pokemon']);

    //     // Buena solución pero mas usable
    //     setCategories(cats => [...cats, 'Pokemon']);

    //     // Insertar un elemento desde un texfield - no tan correcto -
    //     // let entr = document.getElementsByName("entrada")[0].value;
    //     // setCategories(categories.concat(entr));
    // }

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={ setCategories } />

            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            {/* <input name="entrada"></input> */}

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}