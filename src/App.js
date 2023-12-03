
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Component} from 'react';
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blog";
import Contact from "./Contact";
import NoPage from "./NoPage";

class App extends Component {

  // constructor(props) {
  //   super(props)
    
  // }
  
  render() {
    return <div className="grid min-h-full place-items-center bg-white">
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<Home name = "behnam"/>} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        
      </Route>
    </Routes>
  </BrowserRouter>
  </div>;
  }
}
    

export default App;
