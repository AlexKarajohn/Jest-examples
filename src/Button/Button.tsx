import { FC } from "react"

export interface ButtonProps  {
    //Soasdoasod
    text: string,
    color: 'red' | 'blue' | 'grey',
    cb: ()=> void,
    size: number
}

export const Button :FC<ButtonProps>= ({text,color,cb,size}) => {
    return <button onClick={cb} style={{backgroundColor:color,height:size+'px',width:size*2+'px'}}>{text}</button>
}