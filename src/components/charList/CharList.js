import './charList.scss';


const CharList = ({ pokemon, loading,infoPokemon, data}) => {

     const  renderItems = (arr) => {

        const items = arr.map((item) => {

            return (
            <>
            {
            loading ? <h1>Loading...</h1> :
            <div className="char__item" key={item.id} onClick={()=>infoPokemon(item)}>
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <h2>{item.name}</h2>
            
                    {item.types.map((i) =>{   
                        return(
                        
                            
                            <td className={"abilities " + i.type.name}> {i.type.name}</td>
                        
                            
                        )
                    })}
            </div>
             }
            </>
            )
        })


        return (
            <ul className = "char__grid">
                {items}
                {/* {albilities} */}
            </ul>
        )
    }

    const items = renderItems(pokemon)
    
    return(
        <div className = "char__list">
        {items}
        </div>
    )

               
                
}

export default CharList;