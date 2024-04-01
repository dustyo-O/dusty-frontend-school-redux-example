import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cnDucks } from './Ducks.classname';
import { selectDucks } from '../../store/ducks/selectors';
import { load } from '../../store/ducks';

const Ducks = () => {
    console.log('Ducks');
    const ducks = useSelector(selectDucks);
    const dispatch = useDispatch();

    useEffect(() => {
        if (ducks.length > 0) {
            return;
        }

        console.log('startfetch');

        fetch('https://dog.ceo/api/breed/hound/images')
            .then(response => response.json())
            .then((data: { message: string[] }) => {
                dispatch(load(data.message));
            });
    }, [dispatch, ducks.length]);

    return (
        <div className={cnDucks()}>
            {ducks.map(duck => <img key={duck} src={duck} alt={duck} />)}
        </div>
    );
}

export { Ducks };
