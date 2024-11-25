export default function GameOver({winner,rmclick}){
    return(
        <div id="game-over">
            <h2>GAME OVER!</h2>
            {winner &&  <p>{winner} won!</p>}
            {!winner &&  <p>It is a Draw</p>}
            <button onClick={rmclick}>Rematch!</button>
        </div>
    )
}