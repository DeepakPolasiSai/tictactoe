import { useState } from "react"

export default function GameBoard({btnclick,activeplayer}){
    let boxes=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]
let [updatedboard,setupdatedboard]=useState(boxes)
function settingboard(boxindex,bindex){
    setupdatedboard((prevboard)=>{
        console.log(prevboard)
    let newboardset=[...prevboard.map(innerarray=>[...innerarray])];
    newboardset[boxindex][bindex]=activeplayer
    return newboardset
    })
    btnclick()
}
    return(
        <ol id="game-board">
            {updatedboard.map((box,boxindex)=><li key={boxindex}>
                <ol>
                    {box.map((b,bindex)=><li key={bindex}><button onClick={()=>settingboard(boxindex,bindex)}>{b}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}