import React, { useEffect, useState } from 'react'
function MyComp() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    return(<>
                <p>Width: {width}</p>
                <p>Height: {height}</p>
                <button onClick={() => setWidth(window.innerWidth)}>Get Width</button>
                <button onClick={() => setHeight(window.innerHeight)}>Get Height</button>
        </>) }
export default MyComp