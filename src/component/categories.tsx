import React from "react";
import {useDispatch } from 'react-redux';
import { setCategoryId } from "../redux/filter/slice";
import { CategoryId } from "../redux/filter/types";


type CategoriesInfo = {
    value: CategoryId,
};

export const categoriesName = [
    {sort:'Все', index: 0},
    {sort:'Мясные', index: 1},
    {sort:'Вегетарианские', index: 2},
    {sort:'Гриль', index: 3},
    {sort:'Острые', index: 4},
    {sort:'Закрытые', index: 5},
];

const Categories: React.FC<CategoriesInfo> = React.memo(({value}) => {
    const dispatch = useDispatch();
    

    return (
        <div className="categories">
            <div>
                <svg width="60px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 460.713 460.713"  xmlSpace="preserve">
                <g>
                    <rect y="115.356" width="302" height="30"/>
                    <polygon points="335.786,202.231 398.25,264.694 460.713,202.232 	"/>
                    <rect y="315.356" width="302" height="30"/>
                    <rect y="215.356" width="302" height="30"/>
                </g>
                </svg>
            
            <ul>
                {categoriesName.map((categ) => (
                    <li 
                        key={categ.sort}
                        onClick = {()=> dispatch(setCategoryId(categ))}
                        className={value.index === categ.index ? 'active' : ''}>
                        {categ.sort}
                    </li>
                ))}
                
            </ul>
            </div>
        </div>
    );
})

export default Categories;