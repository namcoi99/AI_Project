import React, { useState } from 'react';
import FormTable from '../components/RankingCriteria/FormTable';
import Result from '../components/Result';
import ScoreTable from '../components/ScoringCriteria/ScoreTable';

const DashBoard = () => {
    const [expertNum, setNum] = useState(0)
    const [registered, setRegistered] = useState(false)
    const [doneRanking, setDoneRank] = useState(false)
    const [doneScoring, setDoneScore] = useState(false)
    const [data1, setData1] = useState(undefined)
    const [data2, setData2] = useState(undefined)
    const [web, setWeb] = useState(undefined)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (expertNum > 0) {
            setRegistered(true)
        }
    }

    const handleRankedCriteria = (data) => {
        setData1(data)
        setDoneRank(true)
    }

    const handleRankedWeb = (data) => {
        setData2(data)
        setDoneScore(true)
    }

    return (
        <div className="container-xxl" style={{ "padding": "40px" }}>
            <h1 className="text-center">Evaluating Educational Websites</h1>
            {registered === false ? (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="expertNum" className="form-label">Enter number of experts</label>
                    <input type="number" id="expertNum" className="form-control" value={expertNum} required min="1" onChange={(event) => setNum(event.target.value)} />
                    <label htmlFor="website" className="form-label">Enter website</label>
                    <input type="text" id="website" className="form-control" required placeholder="ex: hocmai.vn" onChange={(event) => setWeb(event.target.value)} />
                    <button className="btn btn-dark" type="submit">Submit</button>
                </form>
            ) : doneRanking === false ? (
                <FormTable expertNum={expertNum} web={web} handleData={handleRankedCriteria} />
            ) : doneScoring === false ? (
                <ScoreTable expertNum={expertNum} web={web} data={data1} handleData={handleRankedWeb} />
            ) : <Result web={web} data={data2} />}
        </div>
    );
};

export default DashBoard;