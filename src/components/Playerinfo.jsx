
import { useState } from "react";
export default function Playerinfo({name,symbol,isactive,onchangename}){
   let [newname,setnewname]=useState(name);
    let [isEditing,setIsEditing]=useState(false);
    function handleEdit(){
        setIsEditing((edit)=>!edit)
        if(isEditing){
            onchangename(symbol,newname)
        }
    }

    function handlename(event){
        setnewname(event.target.value);
    }
    
    return(
 <li className={isactive?'active':undefined}>
    <span className="player">
        {isEditing?  <input type="text" required value={newname} onChange={handlename}></input> :
       <span className="player-name">{newname}</span>}
   
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
</li>
    )
}