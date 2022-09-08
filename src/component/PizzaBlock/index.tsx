import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { selectCartItemId } from '../../redux/cart/selectors';
import { addItem } from '../../redux/cart/slice';
import { CartItem } from '../../redux/cart/types';

const typeNames = ['тонкое', 'традиционное'];

type PizzaBlockProps = {
    id: string; 
    imageUrl: string; 
    title: string; 
    types: number[]; 
    sizes: number[]; 
    price: number;
}

const Container: React.FC<PizzaBlockProps> = ({id, imageUrl, title, types, sizes, price}) => {

    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItemId(id));


    const [typesIndex, setTypesActive] = React.useState(0);
    const [sizesIndex, setSizesActive] = React.useState(0);
    
    const addCount = cartItem ? cartItem.count : 0;

    const onClickAdd = () => {
        const item: CartItem = {
            id,
            title,
            price,
            imageUrl,
            type: typeNames[typesIndex],
            sizes: sizes[sizesIndex],
            count: 0,
        };
        
        dispatch(addItem(item));
    };

    
    return (
        
        
        <div className="form__pizza">
            <Link  to={`/pizza/${id}`} >
                <img  src={imageUrl} alt="pizza"></img>
                <h2 className= "form__pizza-name">{title}</h2>        
            </Link>
            
            <div className="form__pizza-item">
                <ul className="form__pizza-dough">
                    {
                        types.map((typesId) => (
                            <li 
                                key={typesId}
                                onClick={()=>setTypesActive(typesId)} 
                                className={typesIndex === typesId ? 'active' : ''}>
                                {typeNames[typesId]}
                            </li>
                        ))
                    }
                </ul>

                <ul className="form__pizza-size">
                    {
                        sizes.map((sizesId, index) => (
                            <li 
                                key={sizesId}
                                onClick={()=> setSizesActive(index)}
                                className={sizesIndex === index ? 'active' : ''}>
                                {sizesId} см.
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="form__pizza-price">
                <span>от {price} ₽</span>
                <button onClick={onClickAdd}  className="button form__pizza-button" >
                    <svg 
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                        fill="#EB5A1E"
                        />
                    </svg>
                    <span>Добавить</span>
                    {addCount > 0 && (<i>{cartItem?.count}</i>)}
                </button>
            </div>
        </div>
    
       

    );
}

export default Container;