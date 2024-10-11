import './App.css'
import {User} from "./person";
import { UserProvider } from './UserContextProvider';

function App() {
return(
      <UserProvider>
      
  <User name={'anwar'} age={23} isMarried={false} />
    {""}
     <User name={'munasr'} age={28} isMarried={true} />
    {""}
  </UserProvider>
    
  
  );
   
  
}

export default App
