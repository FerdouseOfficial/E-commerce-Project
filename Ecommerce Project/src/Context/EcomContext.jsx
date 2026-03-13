import { Children, createContext, useState } from "react";

export const EcomContext = createContext(null);

export const EcomConProvider = ({ Children }) => {
  const [addcart, setAddcart] = useState(0);
  return (
    <EcomContext.Provider value={{ addcart, setAddcart }}>
      {Children}
    </EcomContext.Provider>
  );
};
