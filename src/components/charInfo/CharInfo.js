import React from 'react';
import './charInfo.scss';



const CharInfo = ({data}) => {
    return (
        <>
            {
            (!data) ? "" : (
                <div className="char__info">
                <div className="char__basics">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="abyss"/>
                </div>
                 <div>
                    <div className="char__info-name">{data.name}</div>
                </div>
                <div className="char__descr">
                   
                </div>
                <div className="char__comics">
                
                    <table>
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                        <tr>
                                        <td className="bor">{poke.stat.name}</td>
                                        <td className="bor">{poke.base_stat}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </table>
                
                </div>

            </div>
            )
                
            }
        </>
            
        
        
    )
}

export default CharInfo;