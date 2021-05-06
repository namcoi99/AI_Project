import React, { useEffect, useState, useRef } from 'react';
import TableRow from './TableRow';
import criteriaData from '../data/criteria.json'
import attributes from '../data/attributes.json';
import { Alert } from 'react-bootstrap';
import axios from '../axios';

function FormTable({ expertNum, web }) {
    const [marks, setMarks] = useState([])
    const [name, setName] = useState('')
    const [totalMarks, setTotalMarks] = useState([])
    const [count, setCount] = useState(1)
    const [show, setShow] = useState(false)
    const [alertContent, setContent] = useState('')
    const [selectedCriteriaNum] = useState(3)

    const handleMark = (index, value) => {
        let copyMarks = [...marks];
        copyMarks[index] = value;
        console.log(index + ": " + value)
        setMarks(copyMarks);
    }

    const reset = () => {
        setShow(false)
        setName('')
        setMarks([])
    }

    const generateRandArr = (event, length, max) => {
        event.preventDefault()
        let randomArray = Array(length).fill().map(() => Math.ceil(Math.random() * max));
        setMarks(randomArray)
        console.log(marks)
    }

    const listToMatrix = (list, elementsPerSubArray) => {
        var matrix = [], i, k;

        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }

            matrix[k].push(list[i]);
        }

        return matrix;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (marks.includes(undefined) || marks.length !== criteriaData.length * attributes.length) {
            // console.log(marks.length)
            // console.log(criteriaData.length * attributes.length)
            window.scrollTo(0, 0)
            setShow(true)
            setContent("You must fill all the mark below.")
            return;
        }
        const copyTotalMarks = [...totalMarks]
        copyTotalMarks.push(listToMatrix(marks, criteriaData.length))
        setTotalMarks(copyTotalMarks)
        reset()
        alert(`Thanks expert ${name}`)
        window.scrollTo(0, 0)
        if (count >= expertNum) {
            alert("Evaluation completed!")
            // call api
            axios.post('/get_criteria', {
                selectedCriteriaNum: selectedCriteriaNum,
                expertsMark: [...totalMarks, marks]
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((result) => {
                console.log(result)
            })
            // window.location.reload()
        } else {
            setCount(count + 1)
        }
        console.log(totalMarks)
    }

    const tableRow = criteriaData.map(criterion => {
        return (
            <TableRow key={criterion.id} criterion={criterion} attributes={attributes} marks={marks} handleMark={handleMark} />
        )
    })
    const attrItems = attributes.map(attr => {
        return (
            <th scope="col" key={attr.name}>{attr.name}</th>
        )
    })

    return (
        <div>
            <button type="submit" className="btn btn-outline-dark" onClick={event => generateRandArr(event, 36, 5)}>Auto fill</button>
            <h2 className="text-center">Website: {web}</h2>
            <Alert show={show} variant="danger" onClose={(event) => setShow(false)} dismissible>
                <Alert.Heading>You got an error!</Alert.Heading>
                <p>
                    {alertContent}
                </p>
            </Alert>
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
                <div className="row">
                    <div className="col">
                        <label htmlFor="expertName" className="form-label">Enter your name*(Expert {count})</label>
                        <input className="form-control" type="text" id="expertName" placeholder="Enter your name..." value={name} required onChange={(event) => setName(event.target.value)} />
                    </div>
                    {/* <div className="col">
                        <label htmlFor="expertScore" className="form-label">Website score* (on scale of 100)</label>
                        <input className="form-control" type="number" min="0" max="100" id="expertScore" placeholder="Enter score..." value={score} required onChange={(event) => setScore(event.target.value)} />
                    </div> */}
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </div>

    );
}

export default FormTable;