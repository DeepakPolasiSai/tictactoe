import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Header from "./components/Header"
import Playerinfo from "./components/Playerinfo"

function App() {
  let [active,setactive]=useState('x')
  function activesetting(){
    setactive((val)=>val==='x'?'o':'x')
  }
  return (
    <>
  <Header></Header>
  <div id="game-container">
  {/* <Playerinfo act={active}></Playerinfo> */}
  <ol id="players" className='highlight-player'>
             <Playerinfo
             name='player1'
             symbol='X'
             isactive={active==='x'}>
             </Playerinfo>
             <Playerinfo
             name='player2'
             symbol='O'
             isactive={active==='o'}>
             </Playerinfo>
         </ol>
  <GameBoard btnclick={activesetting} activeplayer={active}></GameBoard>
  </div>
  </>
  )
}

export default App
