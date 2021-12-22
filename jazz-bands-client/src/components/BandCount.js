import React, {useState, useEffect} from 'react'

const BandCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `This Is IT! ${count}`
    });

    return(
        <div>
            <p>How many times has the band's button been clicked: {count}</p>
            <button onClick={() => setCount(count + 1)}>Band's Button</button>
        </div>
    )
}

export default BandCount