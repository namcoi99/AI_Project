import React, { useState } from 'react';
import MultiStepForm from './MultiStepForm';
import ScoreChart from './ScoreChart';
// import useFbStorage from '../../hooks/firebaseStorage';

const DashBoard = () => {
    const [show, setShow] = useState('evaluator')

    return (
        <div className="dashboard">
            <div className="dashboard-sidebar">
                <div onClick={e => setShow('evaluator')} className={`sidebar-btn mt-2 ${show ==='evaluator' ? 'sidebar-active' : ''}`}>Scoring websites</div>
                <div onClick={e => setShow('chart')} className={`sidebar-btn ${show ==='chart' ? 'sidebar-active' : ''}`}>Scoring History</div>
            </div>
            <div className="dashboard-content">
                {show === "evaluator" ? (
                    <div className="content-item">
                        <h2 className="text-center">Evaluating Educational Websites</h2>
                        <MultiStepForm />
                    </div>
                ) : (
                    < div className="content-item">
                        <h2 className="text-center">Web Scoring History</h2>
                        <ScoreChart />
                    </div>
                )}
            </div>
        </div >
    );
};

export default DashBoard;