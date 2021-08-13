import React, { useState, useEffect } from 'react'
import { AiOutlineGif } from 'react-icons/ai'
import './GIF.css'
{/* Take url prop to display output */}
function useGiphy(query) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      const GIPHY_KEY=process.env.REACT_APP_GIPHY_KEY;
    //   console.log(GIPHY_KEY)
      const url=`https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_KEY}&q=${query}&limit=5`;
      async function fetchData() {
        try {
          setLoading(true);
          const response = await fetch(url);
          const json = await response.json();
         
          setResults(
            json.data.map(item => {
              return item.images.preview.mp4;
            })
          );
          console.log({json})
        } finally {
          setLoading(false);
        }
      }
  
      if (query !== '') {
        fetchData();
      }
      
    }, [query]);
  
    return [results, loading];
}

function AddGIF(){    
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [results, loading] = useGiphy(query);
    return (
        <div className="gif__container">
           <form
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
        }}
      >
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for Gifs!"
        />
        <button type="submit"><AiOutlineGif size={20} style={{color:"red"}}/><h3>Search GIF</h3></button>
      </form>
      <br />
      {loading ? (
        <h1>LOADING GIFS...</h1>
      ) : (
        results.map(item => <video autoPlay loop key={item} src={item} />)
      )}
        </div>
    );
}
export default AddGIF;