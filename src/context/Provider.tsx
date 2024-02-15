import React, { createContext, ReactNode, useState } from "react";

interface MyData {
  user: string;
  fetchedData: [];
}

interface ContextValue {
  myData: MyData;
  updateData: (newData: Partial<MyData>) => void;
}

const MyContext = createContext<ContextValue>({
  myData: { user: "", fetchedData: [] },
  updateData: () => {},
});

interface ContextProviderProps {
  children: ReactNode;
}
const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [myData, setMyData] = useState<MyData>({
    user: "",
    fetchedData: [],
  });

  const updateData = (newData: Partial<MyData>) => {
    setMyData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <MyContext.Provider value={{ myData, updateData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext };
export default ContextProvider;
