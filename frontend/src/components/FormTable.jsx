import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import criteriaData from '../data/criteria.json'
import attributes from '../data/attributes.json';

function FormTable() {
    const [marks, setMarks] = useState([])
    const [name, setName] = useState(undefined)

    const handleMark = (index, value) => {
        let copyMarks = [...marks];
        copyMarks[index] = value;
        console.log(index + ": " + value)
        setMarks(copyMarks);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = {
            name: name,
            marks: marks,
            row: criteriaData.length,
            col: attributes.length
        }
        console.log(result)
    }

    const handleName = (event) => {
        setName(event.target.value)
    }

    const tableRow = criteriaData.map(criterion => (
        <TableRow key={criterion.id} id={criterion.id} attributes={attributes} marks={marks} handleMark={handleMark} />
    ))
    const attrItems = attributes.map(attr => (
        <th scope="col" key={attr.name}>{attr.name}</th>
    ))

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder="Enter your name..." onChange={handleName} />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">The criteria</th>
                        {attrItems}
                    </tr>
                </thead>
                <tbody>
                    {tableRow}
                </tbody>
            </table>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    );
}

export default FormTable;