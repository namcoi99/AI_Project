import React, { useState } from 'react';
import LoadingSpinner from '../../layouts/LoadingSpinner';
import FormTable from './RankingCriteria/FormTable';
import Result from './Result';
import ScoreTable from './ScoringCriteria/ScoreTable';
import useFbStorage from '../../hooks/firebaseStorage';

const MultiStepForm = () => {
    const [data1, setData1] = useState(undefined)
    const [data2, setData2] = useState(undefined)
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [state, setState] = useState({
        expertNum: 0,
        web: ''
    })
    const [addItem] = useFbStorage();

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    const handleRankedCriteria = (data) => {
        setData1(data)
        setLoading(false)
    }

    const handleRankedWeb = (data) => {
        setData2(data)
        setLoading(false)
    }

    const nextStep = () => {
        setStep(step + 1)
    }

    const prevStep = () => {
        setStep(step - 1)
    }

    if (loading)
        return (
            <LoadingSpinner />
        )
    switch (step) {
        case 1:
            return (
                <form onSubmit={nextStep}>
                    <label htmlFor="expertNum" className="form-label">Enter number of experts</label>
                    <input type="number" id="expertNum" className="form-control" name="expertNum" value={state.expertNum} required min="1" max="10" onChange={handleChange} />
                    <label htmlFor="website" className="form-label">Enter website</label>
                    <input type="text" id="website" name="web" className="form-control" required placeholder="ex: hocmai.vn" value={state.web} onChange={handleChange} />
                    <button className="btn btn-dark" type="submit">Next</button>
                </form>
            )
        case 2:
            return <FormTable nextStep={nextStep} prevStep={prevStep} expertNum={state.expertNum} web={state.web} handleData={handleRankedCriteria} setLoading={setLoading} />
        case 3:
            return <ScoreTable nextStep={nextStep} prevStep={prevStep} expertNum={state.expertNum} web={state.web} data={data1} handleData={handleRankedWeb} setLoading={setLoading} />
        case 4:
            return <Result nextStep={nextStep} prevStep={prevStep} web={state.web} data={data2} />
    }
};

export default MultiStepForm;