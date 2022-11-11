import React from 'react'
import { useUserContext } from "./context/LogContext";
const Home = () => {
 const {user} = useUserContext()
  return (
    <div>
     <div className="container text-center mt-4 border border-dark fs-1"
     style={{boxShadow : "0.2rem 0.3rem 0.2rem "}}
     >
      <h6 className='pt-3 pb-3' >You have logged in as {user.name}</h6>
     </div>
       
    </div>
  )
}

export default Home
