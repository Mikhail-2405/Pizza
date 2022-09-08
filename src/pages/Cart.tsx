import CartPizza from "../component/cartPizza";
import CartEmty from "../component/cartEmty";

import { useSelector, useDispatch } from 'react-redux';

import {Link} from "react-router-dom";
import { selectCart } from "../redux/cart/selectors";
import { clearItem } from "../redux/cart/slice";


const Cart = () => {
    const dispatch = useDispatch();
    const {items, totalPrice} = useSelector(selectCart);
    
    const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

    const onClickClear = () => {
        if (window.confirm('Ты точно хочешь очистить корзину?')) {
            dispatch(clearItem());
        };
    };

    if (!totalPrice) {
       return (<CartEmty/>) 
    } else {
        return (
            <div className="basket__active" >
    
                <div className="basket__title">
                    <h2 > 
                        Корзина
                    </h2> 
                    
                    <svg onClick={onClickClear} cursor= "pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>            
                </div>
    
                <div >
                    {
                        items.map((obj: any) => <CartPizza key={obj.id} {...obj}/>)
                    }
                </div>
                
                <div className="bassket-pizza__info">
                    <span>Всего пицц: <i>{totalCount} шт.</i></span>
                    <span>Сумма заказа: <i>{totalPrice} ₽</i></span> 
                </div>
    
                <div className = "basket__btn">  
                    <Link to="/"><button className="button btn-end">Вернуться назад</button></Link>
                    <button className="button btn-pay">Оплатить сейчас</button>
                </div>
    
            </div>
        )
    }
    
}

export default Cart;