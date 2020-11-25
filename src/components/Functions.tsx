import React from 'react'

const Functions = () => {

    const sayWord = (word : string) : string => {
        console.log(word)
        return word;
    }

    sayWord('Steven')
    return (
        <div>
            <div>
                <span>Function 1: </span>
                <span></span>
            </div>
        </div>
    )
}

export default Functions
