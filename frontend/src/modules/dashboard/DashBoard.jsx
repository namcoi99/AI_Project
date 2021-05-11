import React from 'react';
import MultiStepForm from './MultiStepForm';

const DashBoard = () => {
    return (
        <div className="container-xxl" style={{ "padding": "40px" }}>
            <h1 className="text-center">Evaluating Educational Websites</h1>
            <MultiStepForm/>
        </div>
    );
};

export default DashBoard;