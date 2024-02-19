import React from 'react'
import { useEffect,useState } from 'react'
import axios from '../../axios'
import './RowPost.css'
import {  imageUrl } from '../../constants/constants'
function RowPost(props) {

  const [movies, setMovies] = useState([])



  useEffect(() => {
    axios.get(props.url).then(response=>{console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('error') 
    })
  
    return () => {
      
    }
  }, [])
  

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          { movies.map((obj)=>

          
            
            <img className={props.isSmall ?  'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

            )}
           
        </div>
    </div>
  )
}

export default RowPost