import 'bootstrap/dist/css/bootstrap.min.css';
import './utilities.css'
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Content from './components/Content';

type Props = {}

function App({}: Props) {
  return (
    <div className="container-fluid vh-100 vw-100">
      <div className="row h-100">
        <Sidebar/>
        <div className="col-10 bg-custom-white d-flex justify-content-center align-items-center g-0">
          <div className="row h-100 w-100 flex-column">
            <Header/>
            <Content/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

