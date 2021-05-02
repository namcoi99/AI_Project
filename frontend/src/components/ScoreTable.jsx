import React, { useState } from 'react';
import criteriaData from '../data/criteria.json'
import ScoreRow from './ScoreRow';
const ScoreTable = () => {
    const [score, setScore] = useState(0)
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const scoreRow = criteriaData.map(criterion => (
        <ScoreRow criterion={criterion} />
    ))
    return (
        <div className="row justify-content-center">
            <div className="col-auto">
                <form onSubmit={handleSubmit}>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Criteria</th>
                                <th scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scoreRow}
                        </tbody>
                    </table>
                    {/* <div className="row">
                {scoreRow}
            </div> */}
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ScoreTable;