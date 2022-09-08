import React from 'react';
// import qs from "qs";

import { useSelector} from 'react-redux';
// import { useNavigate} from "react-router-dom";

import Container from "../component/PizzaBlock";
import Skeleton from "../component/PizzaBlock/Skeleton";
import Categories from "../component/categories";
import Sort from "../component/sort";
// import { list } from "../component/sort"

import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selector';
import { selectPizzaData } from '../redux/pizza/selector';
import { fetchPizzas } from '../redux/pizza/slice';


const Home: React.FC = () => {
    const dispatch = useAppDispatch();
    // const navigate = useNavigate();


    const isSearch = React.useRef(false);
    // const isMounted = React.useRef(false);    

    const {categoryId, sort, searchValue} = useSelector(selectFilter);
    
    const urlSegment: string = `${categoryId.index > 0 ? `category=${categoryId.index}`:''}&sortBy=${sort.sortProperty}&order=desc${searchValue ? `&search=${searchValue}` : ''}`;
    

    const {items, status} = useSelector(selectPizzaData);
    
    const getPizzas = () => {
        dispatch(
            fetchPizzas(urlSegment)
        );

        window.scrollTo(0, 0);
    };

    // // если изменили параметры и был первый рендер
    // React.useEffect(() => {
    //     if (isMounted.current) {
    //         const queryString = qs.stringify({
    //             categoryId: categoryId.index,
    //             sortProperty: sort.sortProperty,
    //         });
            
    //         navigate(`?${queryString}`);
    //     }
    //     isMounted.current = true;
    // }, [categoryId, sort.sortProperty, navigate])

    // // если был первый рендер, то проверяем первый URL-параментры и сохраняем в редаксе
    // React.useEffect(() => {

    //    if (window.location.search) {
    //     const params = qs.parse(window.location.search.substring(1));

    //     const sort = list.find(obj => obj.sortProperty === params.sortProperty);
    //     if (sort) {dispatch(
    //         setFilters({
    //             categoryId,
    //             sort,
    //             searchValue: ''
    //         })
    //     );
    //     isSearch.current = true;
    //    }}
        
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    // если был был первый рендер, то запрашиваем пиццы
    React.useEffect(() => {
        window.scrollTo(0, 0);

       if(!isSearch.current) {
        getPizzas(); 
       } 

       isSearch.current = false; 

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoryId, sort.sortProperty, searchValue]);

    return (
        <>  
        
            <nav>
                <Categories value= {categoryId}/>
                <Sort value = {sort}/>
            </nav>
            <h1 className="title__container">{categoryId.sort} пиццы</h1>

            <div className="container">
                {
                    status === 'loading' ? [...new Array(8)].map((items, index) => <Skeleton key={index.toString()}/>)
                    : items.filter((obj: { title: string; }) => { 
                        if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
                            return true;
                        } return false;
                    }).map((obj: JSX.IntrinsicAttributes & { id: string; imageUrl: string; title: string; types: number[]; sizes: number[]; price: number; }) => <Container key={obj.id} {...obj}/>
                    
                        
                    )
                }
            </div> 
        </>
    )
}


export default Home;