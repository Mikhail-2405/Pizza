import React from "react";

import {useDispatch } from 'react-redux';
import { setSort } from "../redux/filter/slice";
import { Sort } from "../redux/filter/types";

type SortListItem = {
    name:string;
    sortProperty:string;
};

type PopupClick = MouseEvent & {
    path: Node[];
};

type SortPopup = {
    value: Sort,
}

export const list: SortListItem[] = [
    {name:'популярности', sortProperty: 'rating'}, 
    {name:'цене', sortProperty: 'price'},
    {name:'алфавиту', sortProperty: 'title'},
]; 


const SortItem: React.FC<SortPopup> = React.memo(({value}) => { 
    const dispatch = useDispatch();

    // const {sort} = useSelector(selectFilter);
    const sortRef = React.useRef<HTMLDivElement>(null);

    const [isVisiblePoppup, setIsVisiblePoppup] = React.useState(false);

    const onClickSort = (obj: SortListItem) => {
        dispatch(setSort(obj))
        setIsVisiblePoppup(false);
    };

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => { 
            const _event = event as PopupClick;
            if (sortRef.current && !_event.path.includes(sortRef.current)) {
                setIsVisiblePoppup(false);
            }
        };

        document.body.addEventListener('click', handleClickOutside);

        return () => document.body.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div 
        ref={sortRef} 
        className="sort">
          <div className="sort__label">
          <b>Сортировка по: </b>
          <span onClick={() => setIsVisiblePoppup((!isVisiblePoppup))}>{value.name}</span>
          </div>
          {isVisiblePoppup && (
            <div className="sort__popup">
                <ul>
                    {
                        list.map((obj) => (
                        <li 
                            key={obj.name} 
                            onClick={() => onClickSort(obj)}
                            className= {value.sortProperty === obj.sortProperty ? 'active' : ''}>
                            {obj.name}
                        </li>
                        ))
                    }
                </ul>
            </div>
          )}
      </div>
    );
})

export default SortItem;