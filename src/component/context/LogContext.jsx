import { createContext, useContext, useState } from "react";

const LogContext = createContext({
 user : null,
 logIn :() => {},
 logOut: () => {}
})
const USER = { name:"guest", isGuestUser: false }

export function UserContextProvider ({children}){
 const [user, setUser] = useState(USER)
 function logIn(username){
  setUser({name:username, isGuestUser: true});
 }
 function logOut(){
  setUser(USER)
 }
 
 return (
  <LogContext.Provider value={{user, logIn, logOut}}>
   {children}
  </LogContext.Provider>
 )
}

export function useUserContext(){
 const {user, logIn, logOut} = useContext(LogContext);

 return {user, logIn, logOut}
}