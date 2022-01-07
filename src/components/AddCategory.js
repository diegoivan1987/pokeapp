import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setSearchPokemon,searchPokemon,setPokemon,setIsSearch,setPokemons,loadData}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // setBusqueda(inputValue.trim());
        setInputValue('');
    };

    const onSearch = async() => {
        if(searchPokemon==='')
        {
            setIsSearch(false);
            setPokemons([]);
            loadData();
        }
        else
        {
            const url = `https://pokeapi.co/api/v2/pokemon/${searchPokemon}/`;
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
                console.log(data);
            setPokemon(nuevo);
            setIsSearch(true);
        }
    }

    return (
        <div className='contenedorBarraBusqueda'>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder='Search'
                    type = 'text'
                    value = {searchPokemon}/* {inputValue}
                    onChange={handleInputChange} */
                    onChange={e=>setSearchPokemon(e.target.value)}
                    className='barraBusqueda'
                    onKeyDown={e=>{
                        if(e.keyCode===13)
                        {
                            onSearch();
                        }
                    }}
                ></input>
            </form>
            <div className='contenedorIcono'>
                <img src='https://zen-curran-b09eb5.netlify.app/static/media/Search.f8c9b565.svg' alt='iconoBusqueda' className='iconoBusqueda'></img>
            </div>
        </div>
        
    )
}