import React from 'react';

function TableRow({ criterion, evaluationItems, marks, handleMark }) {
    const RadioItems = ({ item }) => {
        let row = criterion.id - 1;
        let col = item.id - 1;
        let index = row * evaluationItems.length + col;
        return (
            <td>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={`mark${index}`} id={`mark${index}`} value={1} checked={marks[index] == 1} onChange={event => handleMark(index, event.target.value)} />
                    <label className="form-check-label" htmlFor={`${item.name}1`}>Very negative (1)</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={`mark${index}`} id={`mark${index}`} value={2} checked={marks[index] == 2} onChange={event => handleMark(index, event.target.value)} />
                    <label className="form-check-label" htmlFor={`${item.name}2`}>Negative (2)</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={`mark${index}`} id={`mark${index}`} value={3} checked={marks[index] == 3} onChange={event => handleMark(index, event.target.value)} />
                    <label className="form-check-label" htmlFor={`${item.name}3`}>Average (3)</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={`mark${index}`} id={`mark${index}`} value={4} checked={marks[index] == 4} onChange={event => handleMark(index, event.target.value)} />
                    <label className="form-check-label" htmlFor={`${item.name}4`}>Positive (4)</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={`mark${index}`} id={`mark${index}`} value={5} checked={marks[index] == 5} onChange={event => handleMark(index, event.target.value)} />
                    <label className="form-check-label" htmlFor={`${item.name}5`}>Very positive (5)</label>
                </div>
            </td>
        )
    }
    const radioItems = evaluationItems.map(attr => (
        <RadioItems key={attr.id} item={attr} />
    ))
    return (
        <tr>
            <td scope="row">
                <div className="text-wrap" style={{ width: '20rem' }}>
                    {criterion.description}
                </div>
            </td>
            {radioItems}
        </tr>
    );
}

export default TableRow;