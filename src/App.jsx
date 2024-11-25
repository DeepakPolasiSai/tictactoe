import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Header from "./components/Header"
import Playerinfo from "./components/Playerinfo"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combination"
import GameOver from "./components/GameOver"

function App() {
  let boxes=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
  ]
  
  let [playername,setplayername]=useState({'x':'player1','o':'player2'})
  let [active,setactive]=useState('x')
  let [gameturn,setgameturn]=useState([])
  let updatedboard=boxes;
  for(let turn of gameturn){
      let {square,player}=turn
      console.log(square)
      let {row,col}=square
  
      updatedboard[row][col]=player
  }

  let winner;
  for(let win of WINNING_COMBINATIONS){
    let firstbox= updatedboard[win[0].row][win[0].column]
    let secondbox=updatedboard[win[1].row][win[1].column]
    let thirdbox=updatedboard[win[2].row][win[2].column]
    console.log(`${firstbox}-${secondbox}-${thirdbox}`)
    if(firstbox && firstbox===secondbox && firstbox===thirdbox){
      winner=playername[firstbox];
    }
  }

  let isdraw= gameturn.length===9 

  function activesetting(boxindex,bindex){
    setactive((val)=>val==='x'?'o':'x')
  setgameturn((prevval)=>{
  let currplayer='x'
  if(prevval.length>0 && prevval[0].player==='x'){
    currplayer='o'
  }
let updatedval=[{square:{row:boxindex,col:bindex},player:currplayer},...prevval]
return updatedval;
})
  }

  function Rematchclink(){
    setgameturn([])
    setactive('x')
  }

  function changeplayername(symbol,newname){
    console.log(symbol,newname)
    setplayername((prevname)=>{
      return {
        ...prevname,
        [symbol]:newname
      }
    })
    console.log(playername)
  }
  
  return (
    <>
  <Header></Header>
  <div id="game-container">
  {/* <Playerinfo act={active}></Playerinfo> */}
  <ol id="players" className='highlight-player'>
             <Playerinfo
             name='player1'
             symbol='x'
             isactive={active==='x'}
             onchangename={changeplayername}>
             </Playerinfo>
             <Playerinfo
             name='player2'
             symbol='o'
             isactive={active==='o'}
             onchangename={changeplayername}>
             </Playerinfo>
         </ol>
         {(winner || isdraw ) && <GameOver winner={winner} rmclick={Rematchclink}></GameOver>}
  <GameBoard btnclick={activesetting} board={updatedboard}></GameBoard>
  </div>
  <Log turns={gameturn}></Log>
  </>
  )
}

export default App
