import React from 'react';
import { DotLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className="loadingSpinnerContainer">
            <DotLoader color="#36d7b7" />
        </div>
    );
}

export default Spinner;
