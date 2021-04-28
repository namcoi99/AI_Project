import { useState } from 'react';
import './App.css';
import FormTable from './components/FormTable';

function App() {
  const [expertNum, setNum] = useState(0)
  const [registered, setRegistered] = useState(false)
  const [web, setWeb] = useState(undefined)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (expertNum >= 0) {
      setRegistered(true)
    }

    console.log(expertNum + web)
  }

  return (
    <div className="container">
      <h1 className="text-center">Evaluating Educational Websites</h1>
      {registered === false ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="expertNum" className="form-label">Enter number of experts</label>
          <input type="number" id="expertNum" className="form-control" required min="1" onChange={(event) => setNum(event.target.value)} />
          <label htmlFor="website" className="form-label">Enter website</label>
          <input type="text" id="website" className="form-control" required onChange={(event) => setWeb(event.target.value)} />
          <button className="btn btn-primary" type="submit" >Submit</button>
        </form>
      ) : (
          <FormTable expertNum={expertNum} web={web}/>
      )}

    </div>
  );
}

export default App;
