import { useState } from 'react'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './utilities.css'

const App: React.FC = () => {
  const [counter, setCounter] = useState<number>(0)
  return (
    <div className="container-fluid vh-100 vw-100">
      <div className="row h-100">
        <div className="col-2 bg-custom-white text-black d-flex justify-content-center align-items-center">
          Sidebar
        </div>
        <div className="col-10 bg-danger text-white d-flex justify-content-center align-items-center g-0">
          <div className="row h-100 w-100 flex-column">
            <div
              className="bg-custom-white text-black d-flex align-items-center justify-content-center"
              style={{ flex: "0 0 10%" }}
            >
              Header
            </div>
            <div
              className="bg-custom-grey d-flex align-items-center justify-content-center"
              style={{ flex: "1 0 90%" }}
            >
              Content
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

