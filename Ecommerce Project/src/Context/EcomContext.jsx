import { Children, createContext, useState } from "react";

export const EcomContext = createContext(null);

export const EcomConProvider = ({ children }) => {
  const [addcart, setAddcart, Price] = useState(0);
  return (
    <EcomContext.Provider value={{ addcart, setAddcart,}}>
      {children}
    </EcomContext.Provider>
  );
};
