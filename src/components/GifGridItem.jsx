import React from 'react'

const GifGridItem = ({id, title, imagen}) => {
    

  return (
    <div className="card">
        <p>{title}</p>
        <img src={imagen} alt={title} />
        
    </div>
  )
}

export default GifGridItem