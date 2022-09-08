import React from 'react';
import { Link } from 'react-router-dom';


const CartEmty: React.FC = () => {
    
return (
    <div className="basket__empty">
        <h2>Корзина пустая 😕</h2>
        <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
        <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>    
        <img src="img/empty-cart.png" alt=""/> 
        <Link to="/"><button className="button button-basket__empty">Вернуться назад</button></Link>
    </div>
)
}

export default CartEmty;