import React from 'react'

export const GifGridItem = ({pokemon,isSearch}) => {
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
            <div className='pokemon-block'>
                <p className='name'>{pokemon.nombre}</p>
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
