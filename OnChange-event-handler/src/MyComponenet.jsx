import { useState } from "react"
function MyComponenet () {
    const [name , setName] = useState("Guest");
    const [quantity , setQuantity] = useState(0);
    const [comment , setComment] = useState();
    function handlenameChange(event) {
        setName(event.target.value);
    } 
    function handleChangeQuantity(event) {
        setQuantity(event.target.value);
    }
    function handleCommentChange(event) {
        setComment(event.target.value);
    }
    return(<div>
        <input  value = {name} onChange={handlenameChange}/>
        <p>Name : {name}</p>
        <input value = {quantity} onChange={handleChangeQuantity} type="number"/>
        <p>Quantity : {quantity}</p>
        <textarea value = {comment} onChange={handleCommentChange} placeholder="Enter Instructions"/>
        <p>Comment : {comment}</p>
    </div>)
        
}
export default MyComponenet