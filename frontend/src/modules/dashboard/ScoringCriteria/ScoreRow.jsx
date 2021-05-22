import React from 'react';

const ScoreRow = ({ index, score, handleScore, criterion }) => {

    return (
        <tr>
            <td>{criterion.name}</td>
            <th><input className="form-control" type="number" name={`score${index}`} min="0" max="100" id="expertScore" placeholder="Enter score..." value={score[index]} required onChange={(event) => handleScore(event, index, event.target.value)} /></th>
        </tr>
    );
};

export default ScoreRow;