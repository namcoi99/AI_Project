import React, { useState } from 'react';
import criteriaData from '../../data/criteria.json'
import ScoreRow from './ScoreRow';
import axios from '../../axios';

const ScoreTable = ({ expertNum, web, data, handleData }) => {
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
        copyScore[index] = value;
        console.log(index + ": " + value)
        setScore(copyScore);
    }

    const handleSubmit = (event) => {
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
            axios.post('/get_score', {
                expertsWeight: data.expertsWeight,
                criteriaWeight: data.criteriaWeight,
                userRatingScore: [...scores,score]
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then((res) => {
                console.log(res.data)
                handleData(res.data)
            })
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
                        </tbody>
                    </table>

                    <button type="submit" className="btn btn-dark">Submit</button>
                    <button type="button" className="btn btn-outline-dark" onClick={event => generateRandArr(event, data.selectedCriteria.length, 100)}>Auto fill</button>
                </form>
            </div>
        </div>
    );
};

export default ScoreTable;