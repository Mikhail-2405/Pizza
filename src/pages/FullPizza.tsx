import {Link, useParams} from "react-router-dom";
import axios from "axios";
import React from "react";




const FullPizza: React.FC = () => {
    const [pizza, setPizza] = React.useState<{
        imageUrl: string,
        title: string,
        price: number,
    }>();

    const {id} = useParams();
    
    React.useEffect(() => {
        async function fetchPizza() {
          try {
            const {data} = await axios.get('https://62c6f65374e1381c0a6df6b2.mockapi.io/item/' + id);
            
            setPizza(data);
            
          } catch (error) {
            alert('Error: ');
          }
        }
        fetchPizza();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!pizza) {
       return <>Загрузка...</>;
    }
    return (
        <div className="basket__empty">
            <div className="info-pizza">
                <img src={pizza.imageUrl} alt=""/>
                <div>
                    <h1>{pizza.title}</h1> 
                    <h1>{pizza.price} ₽</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur suscipit dolor sequi adipisci tempora explicabo quaerat quisquam perspiciatis, voluptas quod aliquid deserunt libero, saepe distinctio cumque maxime molestiae in?</p>
                </div>
            </div>
            <Link to="/"><button className="button button-basket__empty">Вернуться назад</button></Link> 
        </div>
    )   
    }

export default FullPizza;

