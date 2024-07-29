import {Btn} from "./styles";

// eslint-disable-next-line react/prop-types
export function Button({onClick, children}){
    
    return (
        <>
        <Btn onClick={onClick}>{children}</Btn>
       
        </>
    )
}