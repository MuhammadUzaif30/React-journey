// function List() {
//     const fruits = ["apple" , "banana" , "peach"]
//     const listitems = fruits.map(fruit =><li>{fruit}</li>)
//     return (<ol>{listitems}</ol>);
// }

// export default List
function List () {
    const fruits = [{id : 1 , name : "apple" , cals : 100}, 
                    {id : 2 , name : "banana", cals : 200},
                    {id : 3 , name : "peach" , cals : 300},
                    {id : 4 , name : "Halva" , cals : 50},
                    {id : 5 , name : "Pommegranate" ,cals : 30}];

    const lowcalsfruits = fruits.filter(fruit => fruit.cals <= 100);
    const listitems = lowcalsfruits.map(lowcalsfruit => <li key={lowcalsfruit.id}>{lowcalsfruit.name} : &nbsp; <b>{lowcalsfruit.cals}</b></li>);


    return(<ol>{listitems}</ol>);
}
export default List





    // const highcalfruits = fruits.filter(fruit=>fruit.cals>100);

    // const listitems = highcalfruits.map(highcalfruit => <li key={highcalfruit.id}>{highcalfruit.name}
    //                                                     : &nbsp; <b>{highcalfruit.cals}</b></li>);

    // const listitems = fruits.map(fruit => 
    //                     <li key={fruit.id}>{fruit.name} : &nbsp;<b>{fruit.cals}</b></li>)
    





















































// fruits.sort((a,b) => a.cals - b.cals); // sort by asc numbrs
// fruits.sort((a,b) b.cals - a.cals) //sort in desc format
// fruits.sort((a,b) => a.name.lacaleCompare(b.name))//sort by name , alphabetical order
// fruits.sort((a,b)b.name.localeCompare(a.name))//sort by name order but in reverse , like in reverse alphabetical order
// //localecompare compares the first values with second , 
// // cheaks first letter , if order is good ,like for 
// // apple and onion , a is before o and is true so
// //  for already true format it returns neg ,
// //  means no swap , and for wrong order returns neg ,
// //  neg = swap ,  same logic is folhighed for numbers
// //  just different syntax