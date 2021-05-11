import React, { useState } from 'react';
import criteriaData from '../../../data/criteria.json'
import ScoreRow from './ScoreRow';
import axios from '../../../axios';

const ScoreTable = ({ prevStep, nextStep, expertNum, web, data, handleData, setLoading }) => {
    const [score, setScore] = useState(new Array(data.selectedCriteria.length).fill(0))
    const [scores, setScores] = useState([])
    const [count, setCount] = useState(1)

    const generateRandArr = (event, length, max) => {
        event.preventDefault()
        let randomArray = Array(length).fill().map(() => Math.ceil(Math.random() * max));
        setScore(randomArray)
    }

    const handleScore = (event, index, value) => {
        event.preventDefault()
        let copyScore = [...score];
        var newValue
        if (typeof value === 'string') {
            newValue = parseInt(value)
        }
        copyScore[index] = newValue;
        console.log(index + ": " + newValue)
        setScore(copyScore);
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const copyTotalScores = [...scores]
        copyTotalScores.push(score)
        setScores(copyTotalScores)
        setScore(new Array(data.selectedCriteria.length).fill(0))
        console.log(scores)
        alert(`Thanks expert`)
        if (count >= expertNum) {
            alert("Scoring completed!")
            // call api
            try {
                setLoading(true)
                axios.post('/get_score', {
                    expertsWeight: data.expertsWeight,
                    criteriaWeight: data.criteriaWeight,
                    userRatingScore: [...scores, score]
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }).then((res) => {
                    console.log(res.data)
                    handleData(res.data)
                    nextStep()
                })
            } catch (e) {
                console.log(e)
            }
        } else {
            setCount(count + 1)
        }
    }

    const scoreRow = criteriaData.filter(criterion => data.selectedCriteria.includes(criterion.id)).map(criterion => (
        <ScoreRow key={criterion.id} index={data.selectedCriteria.indexOf(criterion.id)} criterion={criterion} handleScore={handleScore} score={score} />
    ))

    return (
        <div className="row justify-content-center">
            <h2 className="text-center">Website: {web}</h2>
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
                            <tr>
                                <th></th>
                                <td scope="col">
                                    <button type="button" className="btn btn-outline-dark" onClick={event => generateRandArr(event, data.selectedCriteria.length, 100)}>Auto fill</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" onClick={prevStep} className="btn btn-outline-dark">Back</button>
                    <button type="submit" className="btn btn-dark">Next</button>
                </form>
            </div>
        </div>
    );
};

export default ScoreTable;