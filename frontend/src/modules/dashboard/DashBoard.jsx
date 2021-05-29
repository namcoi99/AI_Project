import React from 'react';
import MultiStepForm from './MultiStepForm';
// import useFbStorage from '../../hooks/firebaseStorage';

const DashBoard = () => {
    // const [items, addItem] = useFbStorage();
    // const displayItems = items.map(item => (
    //     <div>
    //         {item.name}
    //     </div>
    // ))
    return (
        <div className="container-xxl" style={{ "padding": "40px" }}>
            <h1 className="text-center">Evaluating Educational Websites</h1>
            <MultiStepForm />
        </div>
    );
};

export default DashBoard;