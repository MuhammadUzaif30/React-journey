
function Button () {
     // const handleClick2 = (name) => console.log('${name} stop clicking me')
    // return (<button onClick={() => handleClick2("BRO")}>Click ME</button>);
    
    // let count = 0;

    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} times`)
    //     }
    //     else {
    //         console.log(`${name} stop cliking me`)
    //     }
    // }


    const handleClick = (e) => e.target.textContent = "OUCH";



    return (<button onDoubleClick={(e) => handleClick(e)}>Click ME</button>);


}
export default Button