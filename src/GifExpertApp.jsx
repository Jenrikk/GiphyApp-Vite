import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Animals'])

    const onAddNewCategory = (eventCateg) => {
      if(categories.includes(eventCateg)) return;

      setCategories([eventCateg, ...categories]);
    }

    const onDeletCat = (event) => {
      setCategories((cat) => cat.filter((categ) => categ !== event));
    }

  

  return (
    <>
        <h1>GiphyApp</h1>
        <AddCategory 
          // setCat={setCategories}
          onNewCategory={event => onAddNewCategory(event)}
        />
        
        
        {
          categories.map(category => {
          //  return <li key={category}>{category}</li>
            return (
              <GifGrid key={category} cate={category} onDeleteCategory={ev => onDeletCat(ev)} />
              )
          })
        }
        
    </>
  )
}

export default GifExpertApp