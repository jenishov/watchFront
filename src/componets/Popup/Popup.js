import React from 'react';
import {RiCloseCircleFill} from 'react-icons/ri'
import axios from "../../axios";
import { toast } from "react-toastify";

const Popup = ({getAllProducts,active,setActive}) => {
    const addProductHanderler =(e)=>{
        e.preventDefault()
        axios.post('products',{
            image: e.target[0].value,
            title: e.target[1].value,
            price: e.target[2].value
        }).then(()=> {
            getAllProducts()
            setActive(false)
            toast('ты успешно добавил продукт!')
        }).catch(()=>toast('ты не смог добавил продукт!'))
    }
    return (
        <div onClick={(e )=> {
            if (e.target.classList.contains('overlay')){
                setActive(false)
            }
        }} className={`overlay ${ active ? 'overlay-active' : ''}` }>
            <form className='popup' onSubmit={(e)=> addProductHanderler(e)}>
                <span onClick={()=> setActive(false)} className='popup__close'> <RiCloseCircleFill/> </span>
                <label className='popup__label' htmlFor="img">Фотография</label>
                <input className='popup__input' id='img' type="text"/>
                <label className='popup__label' htmlFor="title">Название</label>
                <input className='popup__input' id='title' type="text"/>
                <label className='popup__label' htmlFor="price">Цена</label>
                <input className='popup__input' id='price' type="text"/>
                <button type='submit' className=' popup__btn btns'>Добавить продукт</button>
            </form>
            
        </div>
    );
};

export default Popup;