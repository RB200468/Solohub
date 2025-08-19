import 'bootstrap/dist/css/bootstrap.min.css';
import './utilities.css'
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';
import {useState} from 'react';


type Props = {}

function App({}: Props) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  return (
    <div className="container-fluid vh-100 vw-100 g-0">
      <div className="row h-100 g-0">
        <Sidebar isCollapsed={isSidebarCollapsed}/>
        <div className="col-12 col-md bg-custom-white d-flex g-0 h-100 w-100 flex-column">
          <Header toggleSidebar={() => setIsSidebarCollapsed(prev => !prev)}/>
          <Content/>
        </div>
      </div>
    </div>
  );
};

export default App;

