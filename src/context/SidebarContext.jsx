import React,{createContext,useState} from 'react'
export const SidebarContext =createContext()
const SidebarProvider = ({children}) => {
    const [isOpen, setisOpen] = useState(false);
    const sidebarHandler=()=>{
        setisOpen(false)
    }
  return (
    <SidebarContext.Provider value={{isOpen,setisOpen,sidebarHandler}}>
{children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider