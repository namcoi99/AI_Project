import React from 'react';

function TableRow({ criterion, attributes, marks, handleMark }) {
    const RadioItems = ({ item }) => {
        let row = criterion.id - 1;
        let col = item.id - 1;
        let index = row * attributes.length + col;
        return (
            <td>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={`mark${index}`} id={`mark${index}`} value={1} checked={marks[index] == 1} onChange={event => handleMark(index, event.target.value)} />
                    <label className="form-check-label" htmlFor={`${item.name}1`}>1</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={`mark${index}`} id={`mark${index}`} value={2} checked={marks[index] == 2} onChange={event => handleMark(index, event.target.value)} />
                    <label className="form-check-label" htmlFor={`${item.name}2`}>2</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={`mark${index}`} id={`mark${index}`} value={3} checked={marks[index] == 3} onChange={event => handleMark(index, event.target.value)} />
                    <label className="form-check-label" htmlFor={`${item.name}3`}>3</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={`mark${index}`} id={`mark${index}`} value={4} checked={marks[index] == 4} onChange={event => handleMark(index, event.target.value)} />
                    <label className="form-check-label" htmlFor={`${item.name}4`}>4</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name={`mark${index}`} id={`mark${index}`} value={5} checked={marks[index] == 5} onChange={event => handleMark(index, event.target.value)} />
                    <label className="form-check-label" htmlFor={`${item.name}5`}>5</label>
                </div>
            </td>
        )
    }
    const radioItems = attributes.map(attr => (
        <RadioItems key={attr.id} item={attr} />
    ))
    return (
        <tr>
            <th scope="row">{criterion.name}</th>
            {radioItems}
        </tr>
    );
}

export default TableRow;