import React, { useState } from 'react';

const ScoreRow = ({ criterion }) => {
    
    const [score, setScore] = useState(0)

    return (
        <tr>
            {/* <th scope="row">Example website</th> */}
            <th scope="row">{criterion.id}</th>
            <th><input className="form-control" type="number" min="0" max="100" id="expertScore" placeholder="Enter score..." value={score} required onChange={(event) => setScore(event.target.value)} /></th>
            {/* <th>Good</th> */}
        </tr>
    );
};

export default ScoreRow;