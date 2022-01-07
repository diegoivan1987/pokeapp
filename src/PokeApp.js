import React,{useState,useEffect} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const PokeApp = () => {
    const [pokemons, setPokemons] = useState([]);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
    /* const [busqueda, setBusqueda] = useState('')
    const [pokemon, setPokemon] = useState(); */
    const [searchPokemon, setSearchPokemon] = useState('');
    const [pokemon, setPokemon] = useState({});
    const [isSearch, setIsSearch] = useState(false);

    const loadData  = async() => 
    {
        const resp = await fetch(url);
        const data  = await resp.json();
        let siguienteUrl = data.next;
        for (let i = 0; i < data.results.length; i++) {
            const url2 = data.results[i].url;
            const resp2 = await fetch(url2);
            const data2  = await resp2.json();
            let tipo1 = '';
            let tipo2 = '';
            if(data2.types.length===2){
                tipo1 = data2.types[0].type.name;
                tipo2 = data2.types[1].type.name;
            }
            else{
                tipo1 = data2.types[0].type.name;
            }
            const nuevo = {
                id: data2.id,
                nombre:data2.name,
                tipo1: tipo1,
                tipo2:tipo2,
                imagenSrc: data2.sprites.other['official-artwork'].front_default,
            }
            setPokemons(anteriores => [...anteriores,nuevo]);
            
        }
        // setUrl(siguienteUrl);
    }
    useEffect(()=>{
        loadData();
    },[]);

    /* const loadBusqueda  = async() => 
    {
        const urlBusqueda = `https://pokeapi.co/api/v2/pokemon/${busqueda}/`;
        const resp = await fetch(urlBusqueda);
        const data  = await resp.json();
        setPokemon(data);
    } */

    /* useEffect(()=>{
        if(busqueda!='')
        {
            loadBusqueda();
        }
    },[busqueda]);

    useEffect(()=>{
        console.log(pokemon);
    },[pokemon]) */

    return (
        <>
            <header className='cabecera'>
                <img src='https://zen-curran-b09eb5.netlify.app/static/media/logo.7e202684.png' alt='logo' className='logo'></img>
            </header>
            <AddCategory setSearchPokemon={setSearchPokemon} 
                            searchPokemon={searchPokemon} 
                            setPokemon={setPokemon}
                            setIsSearch={setIsSearch}
                            setPokemons={setPokemons}
                            loadData={loadData}
            />
            {
                isSearch ? 
                    <GifGrid 
                        key={url}
                        pokemon={pokemon}
                        isSearch={isSearch}
                        
                    />
                :
                    <GifGrid 
                        key={url}
                        pokemons={pokemons}
                    />
            }
            
        </>
    )
}
/* export const PokeApp = () => {
    const [pokemon, setPokemon] = useState('bulbasaur');

    return (
        <>
            <h2>Pokemon</h2>
            <AddCategory setPokemon={setPokemon}/>
            <hr />
            <ol>
                
                    <GifGrid 
                        key={pokemon}
                        pokemon={pokemon}
                    />
                
                    
            </ol>
        </>
    )
} */
