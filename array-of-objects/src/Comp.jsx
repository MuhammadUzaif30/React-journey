import React ,{ useState } from "react"
function Comp() {
    const[cars , setcars] = useState([]);
    const[carYear , setCarYear] = useState(new Date().getFullYear())
    const[carMake , setCarMake] = useState("");
    const[carModel , setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {year : carYear,
                        make : carMake,
                        model: carModel};
        setcars(c =>[...c , newCar])

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index) {
        setcars(c=>c.filter((_, i)=> i !==index))
    }
    function handleYearChange(event) {
        setCarYear(event.target.value)
    }
    function handleMakeChange(event) {
        setCarMake(event.target.value)
    }
    function handleModelChange(event) {
        setCarModel(event.target.value)
    }

    return(<div>
                <h2>Car Manufacturing system</h2>
                <ul>
                    {cars.map((car , index) => 
                                                    <li key={index} onClick={() =>(handleRemoveCar(index))}>
                                                            {car.year} {car.make} {car.model}
                                                    </li>)}
                </ul>
                <input type="number" value={carYear} onChange={(event) => (handleYearChange(event))}/> <br />
                <input type="text" value={carMake} onChange={(event) => (handleMakeChange(event))}  placeholder="Enter the make of car" /> <br />
                <input type="text" value={carModel} onChange={(event) => (handleModelChange(event))}placeholder="Enter the Model of car" /> <br />
                <button onClick={handleAddCar}>Add Car</button>
            </div>)
}
export default Comp