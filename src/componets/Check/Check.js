import React, {useEffect, useState} from 'react';
import Products from "./Products";
import Popup from "../Popup/Popup";
import axios from "../../axios";
import {ImSearch} from 'react-icons/im'
import SortSelect from "../SortSelect/SortSelect";

const Check = ({basket,setBasket}) => {
    const [count,setCount] = useState(1)
    const [search,setSearch] = useState('')
    const [active, setActive] = useState(false)
    const [products, setProducts] = useState([])
    const [sort,setSort] = useState('')
    let productsFilterAfterSearch = products.filter((item)=>item.title.toUpperCase().includes(search.toUpperCase())).length
    const getAllProducts = ()=>{
        axios('products')
            .then(({data})=> setProducts(data.reverse()))
    }
    useEffect(()=>{
        getAllProducts()
    },[])
    return (
        <section className='check'>
            <div className="container">

                <div className="check__content">
                    <div className='check__top'>
                        <h2 className='title'>Check also</h2>
                        <SortSelect setSort={setSort}/>
                        <div className='check__right'>
                            <ImSearch className='check__search-icons'/>
                            <input placeholder='Что ищем ?' value={search} className='check__search' type="search" onChange={(e)=>{
                                setSearch(e.target.value)
                                setCount(1)
                            }}/>
                            <button type='submit' className='btns' onClick={()=> setActive(true)}>Add</button>
                            <a className='link' href="src/componets/Check/Check">See all></a>
                        </div>

                    </div>
                    <div className="check__row">
                        {
                            products.sort((a, b)=>{
                                if (sort ==='small'){
                                    return a.price -b.price
                                }
                                if (sort ==='big'){
                                return b.price -a.price
                                }
                            }).filter((item)=>item.title.toUpperCase().includes(search.toUpperCase())).filter((item,idx)=>idx < 4 * count).map((item)=>(
                              <React.Fragment key={item.id}>
                                  <Products basket={basket} setBasket={setBasket}  getAllProducts={getAllProducts} item={item}/>
                              </React.Fragment>
                          ))
                        }
                    </div>
                    {
                        !productsFilterAfterSearch &&  <h2 className='check__undefined'>По данному запросу ничего не найдено</h2>
                    }
                    {
                        count * 4 >= products.length ? <button className='check__add btns' type='button' onClick={() => setCount(1)} > Скрыть </button>
                            : <button  className='check__add btns' type='button' style={{display:count * 4 >= productsFilterAfterSearch ? 'none' : 'inline-block'}} onClick ={()=> setCount(count + 1)}>
                                Показать еще
                            </button>

                    }


                    {
                        productsFilterAfterSearch ? <span className='subtitle'> Показано {count * 4 >= productsFilterAfterSearch ? productsFilterAfterSearch : 4 * count} из {productsFilterAfterSearch}</span>:''
                    }

                </div>

            </div>
            <Popup getAllProducts={getAllProducts} active={active} setActive={setActive}/>
        </section>
    );
};

export default Check;