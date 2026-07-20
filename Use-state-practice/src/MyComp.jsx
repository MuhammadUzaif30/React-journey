import React , { useState } from "react"
function Mycomp() {
    const [name , setName] = useState("Guest");
    const [age , setAge] = useState(0);
    const [isEmployee , setEmployee] = useState(false)
    const updateName = () => {
        setName("Uzaif")
    }
    const incAge = () => {
        setAge(age+1);
    }
    const ToggleEmployee = () => {
        setEmployee(!isEmployee)
    }
    return(<div>
            <p> Name : {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age : {age}</p>
            <button onClick={incAge}>Increment Age</button>
            <p>IS Employee : {isEmployee ? "YES" : "NO"}</p>
            <button onClick={ToggleEmployee}>Toggle Employee</button>
    </div>)
}
export default Mycomp