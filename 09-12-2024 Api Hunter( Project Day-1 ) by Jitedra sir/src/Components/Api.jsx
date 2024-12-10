import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApi } from '../features/AppSlice';

export default function Api() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApi());
    }, []);

    const record = useSelector((state) => state.ApiKey );

console.log(record);

    return (
        <div>
            <h1>Api</h1>


            {record &&
                record.record1.map((e, i) => {
                    return (
                        <ul key={i}>
                            <li>{e.id}</li>
                            <li>{e.title}</li>
                            
                        </ul>
                    )
                })
            }

        </div>
    )
}


