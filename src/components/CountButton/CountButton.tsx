import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCount } from '../../store/counter/selectors';
import { cnCountButton } from './CountButton.classname';
import { add } from '../../store/counter';

const CountButton = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(add(233));
    };

    return (
        <button className={cnCountButton()} onClick={handleClick}>
            {count}
        </button>
    );
}

export { CountButton };
