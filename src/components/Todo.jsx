import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './main.css'


const Todo = () =>{
    const [inputText, setInputText] = useState('');
    const [listData, setListData] = useState([]);
    const [isEdit, setIsEdit] = useState(null);
    const [toggle, setToggle] = useState(true);

        const handleAdd = (e) =>{
            e.preventDefault();
            if(!inputText){
                alert("Required Data to Proceed!!")
            }else if(inputText && !toggle){
                    setListData(
                        listData.map((item)=>{
                            if(item.id ===  isEdit){
                                 return {...item, title : inputText}
                            }
                            return item;
                        })
                    )
                    setToggle(true);
                    setIsEdit(null);
                    setInputText('');
            }
            
            else{
                setListData(()=>{
                    const newList = [...listData, {id : new Date().getTime().toString(), title : inputText, status : false}]
                    console.log(newList)
                    setInputText('');
                    return newList
                    
                })
            }
        }

        const handleDelete = (index) => {
            const confirmed = window.confirm('Are you sure you want to delete this item?');
            if (confirmed) {
              const updatedList = listData.filter((item) => item.id !== index);
              setListData(updatedList);
            }
          };
        const handleEdit=(id)=>{
            const isEditing =  listData.find((item)=>{
                return id === item.id
                
            })
            setToggle(false);
            setInputText(isEditing.title);
            setIsEdit(id);
        }

        const handleComplete = (id) =>{
            setListData(
                listData.map((item)=>{
                    if(item.id === id){
                        return {...item, status : !item.status}
                    }return item;
                })
            )
           
        }
        const count = listData.filter(item => item.status === true).length
    return(
        <>
            <div className="container mt-5">
                <center className="display-6 mb-3 fw-bold">React JS Todo Application</center>
                <div className="d-flex justify-content-center align-item-center">
                    <div className="row">
                        <div className="col-12">
                            <div className="card w-100">
                                <div className="card-header bg-dark text-white">
                                    <h4>Todo App</h4>
                                </div>
                                <div className="card-body">
                                    <div >
                                    <form onSubmit={handleAdd} className="d-flex justify-content-center align-item-center">
                                    <input className="form-control shadow-none" type="text" size={55}  value={inputText} onChange={(e)=>setInputText(e.target.value)} />
                                    {
                                        toggle ? <button className="btn btn-outline-dark">Add</button> :
                                        <button className="btn btn-outline-dark">Update</button>
                                    }
                                    </form>
                                    </div>
                                    <div>
                                <ul className="list-group list-group-flush price-list mb-4">
                                    {
                                        listData.map((item)=>{
                                            return <li key={item.id} className="list-group-item p-0 pt-2">
                                            <div className="d-flex justify-content-between align-item-center">
                                            <div className={`${item.status ? 'active' : 'inactive'}`}><span className="fw-bold">{item.title}</span> {item.status ? <span class='badge bg-success'>Completed</span> :" "}</div> 
                                            <div>
                                            <button className="btn btn-outline-dark btn-sm mx-1" onClick={()=>handleEdit(item.id)}><i className='bi bi-pencil-square'></i></button> 
                                            <button className="btn btn-outline-dark btn-sm mx-1" onClick={()=>handleDelete(item.id)}><i className="bi bi-trash"></i></button>
                                            <button className="btn btn-outline-dark btn-sm mx-1" onClick={()=>handleComplete(item.id)}><i className="bi bi-check-circle-fill"></i></button>
                                            </div>
                                            </div>
                                                
                                            </li>
                                        })
                                    }
                                </ul>
            </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            Task to do : {listData.filter((item)=>item.status === false).length}
                                        </div>
                                        <div>
                                            Task Done : {count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todo;