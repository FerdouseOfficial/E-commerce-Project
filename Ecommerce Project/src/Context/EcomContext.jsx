import { Children, createContext, useState } from "react";

export const EcomContext = createContext(null);

export const EcomConProvider = ({props}) => {
    const [addcart, setAddcart] = useState(null)
    return (
        <EcomContext.Provider value={{addcart, setAddcart}}>
            {props.Children}
        </EcomContext.Provider>
    )
}

