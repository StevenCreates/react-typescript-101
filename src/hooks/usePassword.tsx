import React from 'react'

type Props = {
    password : string,
    numberValidataion : number
}

export const usePassword = ({ password, numberValidataion } : Props) => {
    return (
        <div>
            <input type="text"/>
        </div>
    )
}
