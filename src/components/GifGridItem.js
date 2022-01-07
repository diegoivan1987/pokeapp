import React from 'react'

export const GifGridItem = ({pokemon,isSearch,setIsSearch,setPokemons,loadData,setPokemon}) => {
    let pokeclickeado = ''
    
    const obtieneNombre = () => 
    {
        
        pokeclickeado = pokemon.nombre;
        onSearch();
    }

    const onSearch = async() => {
        if(pokeclickeado==='')
        {
            setIsSearch(false);
            setPokemons([]);
            loadData();
        }
        else
        {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokeclickeado}/`;
            const resp = await fetch(url);
            const data  = await resp.json();
            let tipo1 = '';
            let tipo2 = '';
            if(data.types.length===2){
                    tipo1 = data.types[0].type.name;
                    tipo2 = data.types[1].type.name;
                }
                else{
                    tipo1 = data.types[0].type.name;
                }
                const nuevo = {
                    id: data.id,
                    nombre:data.name,
                    tipo1: tipo1,
                    tipo2:tipo2,
                    imagenSrc: data.sprites.other['official-artwork'].front_default,
                    altura: data.height,
                    peso:data.weight,
                    frente:data.sprites.front_default,
                    espalda:data.sprites.back_default,
                    frenteShiny:data.sprites.front_shiny,
                    espaldaShiny:data.sprites.back_shiny,
                }
                setPokemon(nuevo);
            setIsSearch(true);
        }
    }
    return (
        
        <>
        {
            isSearch?
            <div className='tarjetaIndividual'>
                <div className='tarjetaImagenes'>
                    <div className='imagenGrande'>
                        <img src={pokemon.imagenSrc} alt={pokemon.nombre}></img>
                    </div>
                    <div className='imagenPequenaF'>
                        <img src={pokemon.frente} alt={pokemon.nombre}></img>
                    </div>
                    <div className='imagenPequenaB'>
                        <img src={pokemon.espalda} alt={pokemon.nombre}></img>
                    </div>
                </div>
                <div className='tarjetaInfo'>
                    <div className='infoNombre'>
                        <p>{pokemon.nombre}</p>
                    </div>
                    <div className='types-container'>
                        <p className={pokemon.tipo1}>{pokemon.tipo1}</p>
                        <p className={pokemon.tipo2}>{pokemon.tipo2}</p>
                    </div>
                    <div className='pokedexNumber' className='bordeBajo'>
                        <p>Pokedex Number</p>
                        <p>{pokemon.id}</p>
                    </div>
                    <div className='heigth' className='bordeBajo'>
                        <p>Height</p>
                        <p>{pokemon.altura}</p>
                    </div>
                    <div className='weight' className='bordeBajo'>
                        <p>Weight</p>
                        <p>{pokemon.peso}</p>
                    </div>
                    <div className='shinys'>
                        <p>Shiny</p>
                        <img src={pokemon.frenteShiny} alt={pokemon.nombre}></img>
                        <img src={pokemon.espaldaShiny} alt={pokemon.nombre}></img>
                    </div>
                </div>
            </div>
            /*     <div className='pokemon-block'>
                    <p className='name'>{pokemon.nombre}</p>
                    <div className='types-container'>
                        <p className={pokemon.tipo1}>{pokemon.tipo1}</p>
                        <p className={pokemon.tipo2}>{pokemon.tipo2}</p>
                    </div>
                    <p>Pokedex number</p>
                    <p className='number'>{pokemon.id}</p>
                    <p>Height</p>
                    <p className='height'>{pokemon.altura}</p>
                    <p>Weight</p>
                    <p className='weight'>{pokemon.peso}</p>
                    <div className='sprite-container'>
                        <img className='sprite' src={pokemon.imagenSrc} alt={pokemon.nombre}></img>
                    </div>
                    <p>Shiny</p>
                    <div className='sprite-container'>
                        <img className='sprite' src={pokemon.frenteShiny} alt={pokemon.nombre}></img>
                    </div>
                    <div className='sprite-container'>
                        <img className='sprite' src={pokemon.espaldaShiny} alt={pokemon.nombre}></img>
                    </div>
                    
                </div> */
            :
            <div className='pokemon-block' onClick={obtieneNombre}>
                <p className='name' id={pokemon.nombre}>{pokemon.nombre}</p>
                <p className='number'>{pokemon.id.toString().padStart(3,0)}</p>
                <div className='sprite-container'>
                    <img className='sprite' src={pokemon.imagenSrc} alt={pokemon.nombre}></img>
                </div>
                <div className='types-container'>
                    <p className={pokemon.tipo1}>{pokemon.tipo1}</p>
                    <p className={pokemon.tipo2}>{pokemon.tipo2}</p>
                </div>
            </div>
        }
            
        </>
        
    )
}
/* export const GifGridItem = ({name,url}) => {
    
    return (
        <div className='card'>
            <img src={url} alt={name}></img>
            <p>{name}</p>
        </div>
    )
} */
