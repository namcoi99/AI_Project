import React, { useState } from 'react';

const ScoreRow = ({ index, score, handleScore, criterion }) => {

    return (
        <tr>
            <th scope="row">{criterion.id}</th>
            <th><input className="form-control" type="number" name={`score${index}`} id={`score${index}`} min="0" max="100" id="expertScore" placeholder="Enter score..." value={score[index]} required onChange={(event) => handleScore(event, index, event.target.value)} /></th>
        </tr>
    );
};

export default ScoreRow;