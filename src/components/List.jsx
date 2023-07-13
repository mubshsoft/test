import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useState } from "react";

let List = ()=> {
    const [list, setList] = useState([10,20,30,40,50,60,70,80,90,100]);
    const [check, setCheck] = useState([]);
    function deleteClick(index){
        let newList = list.filter((item,i)=>{
            return  index!= i;
            
        })
        setList(newList)
    }
    function handleChecked(e){
        setCheck(e.target.checked)
        console.log()
    }
  
    return(
        <>
        list of names : {
            list.map((elem,index)=>{
                return <div className="d-flex p-1 m-2 align-items-center" key={index}><input type="checkbox" id={index} onChange={e=>handleChecked(e)} /><p key={index}>{elem}</p><button onClick={()=>deleteClick(index)}>Delete</button></div>
            })
        }
        </>
    )
}
export default List;