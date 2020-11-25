import React from 'react'

const Types = () => {
    const isOpen : boolean = true;
    const firstName : string = 'steven'
    const lastName : string = 'hofheins'
    const age : number = 30
    const myArr : number[] = [0, 1, 2, 3]
    const value = isOpen ? 'true' : 'false'

    return (
        <div>
            <span style={{fontWeight: 'bold'}}>
            TypeScript Types
            </span>
        
            <div>
               <span>Type String: </span>
               <span>{firstName} {lastName}</span>
            </div>
            <div>
               <span>Type Number: </span>
               <span>{age}</span>
            </div>
            <div>
               <span>Type Boolean: </span>
               <span>{value}</span>
            </div>
            <div>
               <span>Type Array: </span>
               {myArr.map((arrValue) => (
                   <span>{arrValue}</span>
               ))}
            </div>
        </div>
    )
}

export default Types
