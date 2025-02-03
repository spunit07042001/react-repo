import React from 'react'

const ChildComponent = React.memo(
    (props) => {
        console.log('ChildComponent go re render again')
        return (
            <div>
                <button onClick={props.handleClick}>
                    {props.buttonName}
                </button>
            </div>
        )
    }
)

export default ChildComponent



// react.memo -> wrap -> componet -> componet
//  re-render tabhi hoga jab props change honga nahi toh re-render nhi hoga 

// if u sending a fn , then react.memo want be able to save you from re-render