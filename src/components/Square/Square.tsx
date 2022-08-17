import React, { useEffect, useState } from 'react';
import './Square.css'

const Square = ({myIndex}:{myIndex: string}) => {
    // const [ctr , setCtr] = useState('#010');
    // const [ctr1 , setCtr1] = useState('#010');

    // useEffect(()=>{
    //     console.log("start with ♥");
    // },[ctr,ctr1])

    // const editCtr = () => {
    //         setCtr(ctr === '#F10' ? '#010' : '#F10' );  
    // }
    return (
        <p 
            className='saif'
            // onClick={editCtr}
            // style={{
            //     backgroundColor : ctr
            // }}
        > 
           {myIndex}
        </p>
    )
}

export default Square;