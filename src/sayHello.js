import React from 'react';


function Hello() {
    const sayHello = () => {
        console.log("hello from another component");
    };

    return (
        <div>
            <h3>This is hello component</h3>
            <button onClick={sayHello}>Say hello</button>
        </div>
    );
}

export default Hello;