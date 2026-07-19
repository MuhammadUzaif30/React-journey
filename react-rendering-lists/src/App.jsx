import List1 from "./List1";
function App () {

    const fruits = [{id : 1 , name : "apple" , cals : 100}, 
                    {id : 2 , name : "banana", cals : 200},
                    {id : 3 , name : "peach" , cals : 300},
                    {id : 4 , name : "Halva" , cals : 50},
                    {id : 5 , name : "Pommegranate" ,cals : 30}];
    
    const vegies = [{id : 6 , name : "potato" , cals : 95}, 
                    {id : 7 , name : "onion", cals : 140},
                    {id : 8 , name : "cucumber" , cals : 350},
                    {id : 9 , name : "corn" , cals : 55},
                    {id : 10 , name : "caret" ,cals : 35}];
  return (
    // <>
    //   {fruits.length > 0 ? <List1 items = {fruits} category = "Fruits"/> : null}
    //   {vegies.length > 0 ? <List1 items = {vegies} category = "Vegetables"/> : null }
    // </>

<>
    {fruits.length > 0  && <List1 items = {fruits} category = "Fruits"/> }
    {vegies.length > 0  && <List1 items = {vegies} category = "Vegetables"/> } 
 
{/* && used for condition when there is condition for "yes do that" or "do nothing" so we use it instead of the tenary operator known as Short-Circuit in React */}

</>
  );
}
export default App