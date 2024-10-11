import { createContext, useEffect, useState } from "react";

export interface User {
  name: string;
  age: number;
  isMarried: boolean;
}
interface UserContextType{
    users: User[] | null;
    addUser: (user : User) => void;
    updateUser: (id : string) => void;
    deleteUser: (id : string) => void;
}

const contextInitialValues = {
    users: null,
    addUser: () => null,
    updateUser: () => null,
    deleteUser: () => null,

};

export const UserContext = createContext<UserContextType>(contextInitialValues);


interface Props {
    children:React.ReactNode
}

export const UserProvider = (Props:Props) => {

const [users, setUsers] = useState<User[] | null>(null);

useEffect(()=> {
    setUsers([{name:"Anwar",age:23,isMarried:false}]);

}, []);
    
 const addUser = (user: User) => null
 const updateUser = (id: string) => null
 const deleteUser = (id: string) => null
    

    return (
    <UserContext.Provider value ={{users,addUser,updateUser,deleteUser}}>
     {Props.children}
    </UserContext.Provider>
    );
}