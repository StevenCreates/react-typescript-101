import React from 'react'


type Props = {
    // onClick(): string; makes sure function returns string
    // onClick(): void; makes function not need to return something
    // onClick(text: string): void; void method with params
    // onClick: () => void;
    onClick: (text: string) => void;
}


export const Button = ({ onClick }: Props) => {
    return (
        <button onClick={() => onClick("Hi")}>
            Button
        </button>
    )
}
