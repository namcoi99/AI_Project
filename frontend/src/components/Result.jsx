import React from 'react';

const Result = ({ web, data }) => {
    return (
        <div className="row justify-content-center">
            <h2 className="text-center">Website: {web}</h2>
            <div className="col-auto">
                <div className="card" style={{ width: '55rem', border: "none" }}>
                    <div className="card-body">
                        <div className="shadow-lg p-3 mb-5 bg-body rounded">

                            <p className="card-text text-center text-uppercase fs-1" style={{ color: "grey", fontFamily: "Garamond" }}>This website ranks<br /><span className="fw-bold" style={{ fontSize: "100px", color: "blueviolet" }}>{data.rank}</span><br /> with score of {data.score.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <button className="btn btn-dark btn-lg d-grid gap-2 col-6 mx-auto" type="button" onClick={event => window.location.reload()}>Done</button>
            </div>
        </div>
    );
};

export default Result;