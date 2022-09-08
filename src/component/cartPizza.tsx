import React from "react";

import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from "../redux/cart/slice";
import { CartItem } from "../redux/cart/types";

type PizzaItemsProps = {
    id: string; 
    imageUrl: string; 
    title: string; 
    type:number; 
    sizes:number; 
    price:number; 
    count:number
};

const CartPizza: React.FC<PizzaItemsProps> = ({id, imageUrl, title, type, sizes, price, count}) => {

    const dispatch = useDispatch();
    
    const onClickPlus = () => {
        dispatch(addItem({
            id,
        } as CartItem));
    };

    const onClickMinus = () => {
        count === 1 ? dispatch(removeItem({id, totalPrice: price*count})) :  dispatch(minusItem({id, price}));
    };

    const onClickRemove = () => {

        if (window.confirm('Ты точно хочешь удалить товар?')) {
            
            dispatch(removeItem({id, totalPrice: price*count}))
        };
    };

    return (
        
        <div className="bassket-pizza__form">                       
            <div className="bassket-pizza__form-item">
                <img src={imageUrl} alt=""/>
                <div>
                    <h3>{title}</h3>
                    <span>{type}, {sizes} см.</span>
                </div>
            </div>
            
            <div className="bassket-pizza__form-add">
                <button onClick={onClickMinus} className="bassket-pizza__form-btn">-</button>
                <span>{count}</span>
                <button onClick ={onClickPlus} className="bassket-pizza__form-btn">+</button>
            </div>
            
            <span className="bassket-pizza__form-sum">{price*count} ₽</span>

            <button onClick={onClickRemove} className="bassket-pizza__form-btn">x</button>
        </div>
    );
}

export default CartPizza;