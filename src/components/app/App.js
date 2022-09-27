import AppHeader from "../appHeader/AppHeader";

import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import axios from 'axios';
import {useState, useEffect }from 'react';


const App = () => {
    const limit = 12;
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
    const [nextUrl,setNextUrl]=useState();
    const [pokeDex,setPokeDex]=useState();

    const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        getPokemon(res.data.results)
        setLoading(false)
    }

    const getPokemon=async(res)=>{
       res.map(async(item)=>{
          const result=await axios.get(item.url)
          setPokeData(state=>{
              state=[...state,result.data]
              state.sort((a,b)=>a.id>b.id?1:-1)
              return state;
          })
       })  
       console.log(res); 
    }




    useEffect(()=>{
        pokeFun();
    },[url])
   
    // console.log(pokeDex);
    return (
        <div className="app">
            <AppHeader/>
            <main>
             
                <div className="char__content">
                    <CharList pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)} data ={pokeDex} />
                    <CharInfo data ={pokeDex}/>
                   
                </div>
                <div className = "for__button">
                { nextUrl && <button className ="loadMore" onClick={()=>{
                            setUrl(nextUrl)
                }}>Load More</button>}
               
                </div>
          
            </main>
        </div>
    )
}

export default App;