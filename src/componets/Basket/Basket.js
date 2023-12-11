import React, {useState} from 'react';
import axios from "../../axios";
import {toast} from "react-toastify";

const Basket = ({active,setActive,basket,setBasket}) => {
    const [order,setOrder]=useState(false)
    const [name,setName]=useState('')
    const [phone,setPhone]=useState('')


    const addOrder= ()=>{
        axios.post('order',{
            name:name,
            phone:phone,
            order:basket,
        }).then(()=>{
            setName('')
            setPhone('')
            setBasket([])
            toast('Заказ успешно завершен!!')
        }).catch(()=> toast('Не удалось завершить покупку!!'))
    }

    return (

        <div onClick={(e)=>{
            if (e.target.classList.contains('overlay2')){
                setActive(false)
            }
        }} className={` overlay2 ${active ? 'overlay2-active': ''}`}>
            <div className='popup2'>
                <h2 className='popup2__title'>Корзина</h2>
                {
                    basket.map((item)=>(

                        <div key={item.id} className='popup2__card'>
                            <img className='popup2__img' src={item.image} alt=""/>
                            <div className='popup2__info'>
                                <p className='popup2__name subtitle'>{item.title}</p>
                                <p className='popup2__price subtitle'>{item.price} $</p>
                            </div>

                            <button onClick={()=>{
                                setBasket(basket.filter((el)=>el.id !== item.id ))
                                basket.length === 1  && setActive(false)
                            }} className='popup2__close'>x</button>
                        </div>

                    ))
                }
                <div className='popup2__total'>
                    <div className='popup2__total-info'>
                        <p className='popup2__total-sum'>Total price:</p>
                        <p className='popup2__total-price'>{basket.reduce((acc,rec)=> +acc + +rec.price,0)} $</p>
                    </div>
                    <div className='popup2__total-info'>
                        <p className='popup2__total-sum'>Tax:</p>
                        <p className='popup2__total-price'>{Math.ceil(basket.reduce((acc,rec)=> +acc + +rec.price,0) /100 * 5)} $</p>
                    </div>
                    <div style={{display: order ? 'flex': 'none'}} className='popup2__inputs'>
                        <input onChange={(e)=>setName(e.target.value)} value={name} className='popup2__input' placeholder='name' type="text"/>
                        <input onChange={(e)=>setPhone(e.target.value)} value={phone} className='popup2__input' placeholder='phone' type="tel"/>
                    </div>
                    <button onClick={()=>{
                        if (!order){
                            setOrder(true)
                        }else {
                            addOrder()
                        }
                    }} className='popup2__total-btn btns'>{order ? 'order': 'checkout' }</button>
                </div>
            </div>
        </div>
    );
};

export default Basket;