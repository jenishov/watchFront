import React, {useState} from "react";
import Check from "./componets/Check/Check";
import Footer from "./componets/Footer/Footer";
import Header from "./componets/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.scss'
const App =()=> {
    const [basket,setBasket] = useState([])
  return (
    <div className="App">
        <Header basket={basket} setBasket={setBasket}/>
      <main>
          <Check basket={basket} setBasket={setBasket}/>
      </main>
        <Footer/>
        <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
  );
}

export default App;
