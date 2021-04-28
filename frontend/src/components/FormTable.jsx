import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import criteriaData from '../data/criteria.json'
import attributes from '../data/attributes.json';

function FormTable({ expertNum, web }) {
    const [marks, setMarks] = useState([])
    const [name, setName] = useState('')
    const [count, setCount] = useState(1)

    const handleMark = (index, value) => {
        let copyMarks = [...marks];
        copyMarks[index] = value;
        console.log(index + ": " + value)
        setMarks(copyMarks);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (marks.includes(undefined) || marks.length !== criteriaData.length * attributes.length) {
            console.log(marks.length)
            console.log(criteriaData.length * attributes.length)
            alert("Please fill all marks!!!")
        } else {
            const result = {
                name: name,
                marks: marks,
                website: web,
                row: criteriaData.length,
                col: attributes.length
            }

            // call api
            //
            //
            //

            setName('')
            setMarks([])
            alert(`Thanks expert ${name}`)
            if (count >= expertNum) {
                alert("Evaluation completed!")
                window.location.reload()
            } else {
                setCount(count + 1)
            }
            console.log(result)
        }
    }

    const handleName = (event) => {
        setName(event.target.value)
    }

    const generateRandArr = (event, length, max) => {
        event.preventDefault()
        let randomArray = Array(length).fill().map(() => Math.ceil(Math.random() * max));
        setMarks(randomArray)
        console.log(marks)
    }

    const tableRow = criteriaData.map(criterion => (
        <TableRow key={criterion.id} criterion={criterion} attributes={attributes} marks={marks} handleMark={handleMark} />
    ))
    const attrItems = attributes.map(attr => (
        <th scope="col" key={attr.name}>{attr.name}</th>
    ))

    return (
        <div>
            <button type="submit" onClick={event => generateRandArr(event, 36, 5)}>Auto fill</button>
            <h2 className="text-center">Website: {web}</h2>
            <form onSubmit={handleSubmit}>
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
                <div>
                    <label htmlFor="expertName" className="form-label">Enter your name*(Expert {count})</label>
                    <input className="form-control" type="text" id="expertName" placeholder="Enter your name..." value={name} required onChange={handleName} />
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>

    );
}

export default FormTable;