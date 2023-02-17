/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React, {useState, useEffect} from 'react';
import { createRoot } from 'react-dom/client';

import Menu from './components/menu';
import Home from './components/home';


/**
 * We can start our initial App here in the main.js file
 */
const App = () =>{
    const [products, setProducts] = useState([]);
    const [getProducts, setGetProducts] = useState(false)
    useEffect(() => {
      fetch("http://localhost:3035")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setProducts(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, [getProducts]);
  
    const arraySearch = (array, keyword) => {
        console.log(keyword)
      const searchTerm = keyword.toLowerCase()
      return array.filter(value => {
          return value.name.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
          value.price.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
          value.about.toLowerCase().match(new RegExp(searchTerm, 'g')) ||
          value._id.toLowerCase().match(new RegExp(searchTerm, 'g'))
      })
  }

  const handleOnChange = async (e) => {
    let value = e.target.value;
    if (value.length) {
      let search = await arraySearch(products, value);
      if(search.length > 1 ){
        setProducts(search)
      }
    } else {
        setProducts(products)
    }
  }

  const reset = () => {
    setGetProducts(!getProducts)
  }
  
    
        return (
            <div className="App">
                <Menu handleOnChange={handleOnChange} reset={reset}/>
                <Home products={products} />
            </div>
        );
    

}

// Render this out
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
