import { Children, createContext, useState } from "react";

export const EcomContext = createContext(null);

export const EcomConProvider = ({ children }) => {
  const [addcart, setAddcart] = useState(0);
  return (
    <EcomContext.Provider value={{ addcart, setAddcart }}>
      {children}
    </EcomContext.Provider>
  );
};
