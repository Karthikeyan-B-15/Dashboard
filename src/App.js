import './App.css';
import Sidebar from './component/Sidebar';
import { BrowserRouter as  Router, Route,Routes} from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Project from './component/Project';
import Client from './component/Client';
import Workplan from './component/Workplan';
import Message from './component/Message';
import Member from './component/Member';
function App() {
  return (
    <div className='App'>
      
      <Router>
      <Sidebar />
      <Routes>
        <Route path="Dashboard" element={<Dashboard />}/>
        <Route path="Member" element={<Member />}/>
        <Route path="Project" element={<Project />}/>
        <Route path="Client" element={<Client />}/>
        <Route path="Workplan" element={<Workplan />}/>
        <Route path="Message" element={<Message />}/>
      </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
