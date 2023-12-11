import React from 'react';
import axios from "../../axios";
import {toast} from "react-toastify";


const Products = ({getAllProducts,item,setBasket,basket}) => {

    const deleteProductsHandler =(id)=>{
        axios.delete(`products/${id}`)
            .then(()=>{
                getAllProducts()
                toast('ты успешно удалил продукт!')
            }).catch(()=>  toast('ты не смог удалил продукт!'))
    }
    return (
        <div className="check__card">
            <img className='check__card-img' src={item.image} alt=""/>
            <h3 className='title'>{item.title}</h3>
            <p className='check__card-price subtitle'>{item.price > 0 ? `$${item.price}.00` :'Free*' }</p>
            <div className='check__card-btns'>
                <button disabled={basket.findIndex((el)=>el.id === item.id) > -1} onClick={()=>setBasket([...basket,item])} style={{background: item.price <=0 && 'orange'}} className='btns' type='button'>{item.price > 0 ? 'Buy': 'Apply'}</button>
                <button onClick={()=>deleteProductsHandler(item.id)} style={{background:'red'}} className='btns' type='button'>Delete</button>
            </div>

        </div>
    );
};

export default Products;