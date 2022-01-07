import React,{useState,useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({pokemons,pokemon,isSearch,setIsSearch,setPokemons,loadData,setPokemon}) => {

    
    return (
        <>
            <div className='pokemon-container'>
                {isSearch?
                    <GifGridItem 
                        key={pokemon.nombre}
                        pokemon={pokemon}
                        isSearch={isSearch}
                        setIsSearch={setIsSearch}
                        setPokemons={setPokemons}
                        loadData={loadData}
                        setPokemon={setPokemon}
                    />
                    :
                    pokemons.map((poke)=>(
                        <GifGridItem 
                            key={poke.nombre}
                            pokemon={poke}
                            setIsSearch={setIsSearch}
                            setPokemons={setPokemons}
                            loadData={loadData}
                            setPokemon={setPokemon}
                        />     
                    ))
                }
                
            </div>
            
        </>
        
    )
}
/* export const GifGrid = ({pokemon}) => {

    const [info, setInfo] = useState([]);
    // const [images, setImages] = useState([]);

    useEffect(()=>{
        getInfo(pokemon).then(setInfo);
    },[pokemon]);

    return (
        <>
            <h3>{pokemon}</h3>
            <div className='card-grid'>
                <GifGridItem 
                    key={info.id}
                    {...info}
                />  
            </div>
            
        </>
        
    )
} */
