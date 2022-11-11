import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Auth from './component/Auth';
import { UserContextProvider } from './component/context/LogContext';


function App() {
  return (
    <div >
      <UserContextProvider >
     <Header />
   <Auth />
   </UserContextProvider>
    </div>
  );
}

export default App;
