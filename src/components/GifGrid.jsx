import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({cate, onDeleteCategory}) => {

  // const [images, setImages] = useState([]);

  // const getImages = async() => {
  //   const newImages = await getGifs(cate);
  //   setImages(newImages);
  // }

  // useEffect(() => {
  //   getImages();
  // }, []);
  
  const {imagges, isLoading} = useFetchGifs(cate);

  const handleClick = (ctg) => {
    onDeleteCategory(ctg);
  }


  return (
    <>
        <h3>{cate}</h3>
        <button onClick={() => handleClick(cate)} id="button-delete">Delete</button>

        {
          isLoading && (<h2>CARGANDO...</h2>)
        }

        <div className='card-grid'>
            {
              imagges.map(imag => {
                return <GifGridItem key={imag.id} {...imag}/>
                
              })
            }
        </div>

    </>
  )
}

export default GifGrid