import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Dynammic = (props) => {
    // console.log(useParams());
    const { name } = useParams();
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}

export default Dynammic;