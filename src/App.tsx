import './App.css'
import {User,Countries} from "./person";
import { UserProvider } from './UserContextProvider';

function App() {
return(
      <UserProvider>
      
  <User name={'anwar'} age={23} isMarried={false} country={Countries.Brazil} />
    {""}
     <User name={'munasr'} age={28} isMarried={true} country={Countries.somalia}/>
    {""}
  </UserProvider>
    
  
  );
   
  
}

export default App
