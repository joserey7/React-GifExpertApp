import React from 'react'

export const GifGridItem = ({ title, url }) => {

    // console.log(props.img)
    // console.log(id, title, url)
    return (
        <div className="card animate__animated animate__bounceIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
