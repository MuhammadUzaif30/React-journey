import { useState, useEffect } from 'react';

function MyComp() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    function addCount() {
        setCount(c => c + 1);
    }

    function subCount() {
        setCount(c => c - 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>SUB</button>
        </div>
    );
}

export default MyComp;