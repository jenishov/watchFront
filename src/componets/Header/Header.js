import React, {useState} from 'react';
import {BsApple} from 'react-icons/bs'
import Basket from "../Basket/Basket";
import {BsBasket} from 'react-icons/bs'
import {toast} from "react-toastify";
const Header = ({basket,setBasket}) => {
    const [active,setActive]= useState(false)
    return (
        <header className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <div className='header__watch'>
                        <BsApple/>
                        WATCH
                    </div>
                    <ul className='header__list'>
                        <li className='header__item'>Design</li>
                        <li className='header__item'>Health</li>
                        <li className='header__item'>Workout</li>
                        <li className='header__item'>Activity</li>
                        <li className='header__item'>Connect</li>
                        <button onClick={()=>{
                            if (basket.length > 0){
                                setActive(true)
                            }else {
                                toast('Корзина пуста!')
                            }
                        }} className='basket__icons'> <BsBasket/>{basket.length > 0 ?basket.length:''}</button>
                    </ul>
                </nav>
            </div>
            <Basket basket={basket} setBasket={setBasket} active={active} setActive={setActive}/>
        </header>
    );
};

export default Header;