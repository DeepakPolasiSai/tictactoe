// import { useState } from "react"

export default function GameBoard({btnclick,board}){
 
// let [updatedboard,setupdatedboard]=useState(boxes)
// function settingboard(boxindex,bindex){
//     setupdatedboard((prevboard)=>{
//         console.log(prevboard)
//     let newboardset=[...prevboard.map(innerarray=>[...innerarray])];
//     newboardset[boxindex][bindex]=activeplayer
//     return newboardset
//     })
//     btnclick()
// }
    return(
        <ol id="game-board">
            {board.map((box,boxindex)=><li key={boxindex}>
                <ol>
                    {box.map((b,bindex)=><li key={bindex}><button onClick={()=>btnclick(boxindex,bindex)} disabled={b!==null}>{b}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}