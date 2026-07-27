"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";
import { CreateOrderPayload } from "../api/order.api";

type CreateOrderContextType = {
  data: Partial<CreateOrderPayload>;
  updateData: (fields: Partial<CreateOrderPayload>) => void;
  clearData: () => void;
}

const CreateOrderContext = createContext<CreateOrderContextType | undefined>(undefined)

export function CreateOrderProvider({children} : {children: ReactNode}){
    const [ data, setData ] = useState<Partial<CreateOrderPayload>>({})


    function updateData(fields:Partial<CreateOrderPayload>){
        setData((prev)=> (
            {...prev, ...fields}
        ))
    }

    function clearData(){
        setData({});
    }


  const value: CreateOrderContextType = {
    data,
    updateData,
    clearData
  };
  return <CreateOrderContext.Provider value={value}>{children}</CreateOrderContext.Provider>;
}


export function useStartOrder() {
  const context = useContext(CreateOrderContext);
  if (context === undefined) {
    throw new Error("useCreateOrder must be used within an AuthProvider");
  }
  return context;
}