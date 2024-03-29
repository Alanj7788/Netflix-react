import React from 'react'
import { useEffect,useState } from 'react'
import axios from '../../axios'
import './RowPost.css'
import {  imageUrl } from '../../constants/constants'
import { API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube'
function RowPost(props) {

  const [movies, setMovies] = useState([])
  const [urlid,setUrlId]=useState('')


  useEffect(() => {
    axios.get(props.url).then(response=>{console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert('error') 
    })
  
    return () => {
      
    }
  }, [])
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if (response.data.results.length!==0){
      setUrlId(response.data.results[0]) }
      else {
        console.log("Not available trailer")
      }
    })
  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          { movies.map((obj)=>        
            
            <img 
            onClick={()=>
              handleMovie(obj.id)
            }
            className={props.isSmall ?  'smallPoster' :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

            )}
           
        </div>
        { urlid && <YouTube opts={opts} videoId={urlid.key}/> }
    </div>
  )
}

export default RowPost