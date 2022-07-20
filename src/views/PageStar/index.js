import Card from './components/Card'
import {useState, useEffect} from 'react'
import axios from 'axios'
import './style.css'

function PageStar(){

    const [characters, setCharacters] = useState([])


    useEffect(
        function(){
        axios(
            {url: "https://swapi.dev/api/people/?page=6"}
        ).then(function(response){
                setCharacters(response.data.results)
            }
        )
        },
        []
    )

    return(
        <section className='display'>
             <h1>Star Wars Characters</h1>
             <section className='grid'>

             {characters.map(
                function(characters){
                    return <Card characters={characters}/>
                }
             )}

             </section>
        </section>
    )
}

export default PageStar;