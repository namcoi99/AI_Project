import React from 'react';

const Result = ({ web, data }) => {
    return (
        <div className="row justify-content-center">
            <h2 className="text-center">Website: {web}</h2>
            <div className="col-auto">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{data.rank}</th>
                            <th>{data.score}</th>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-dark" type="button" onClick={event => window.location.reload()}>Done</button>
            </div>
        </div>
    );
};

export default Result;