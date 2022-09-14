import { useState } from 'react';
import './index.css';
import SingleQuestion from './Questions';
import data from './data';

function App() {
  const [questions, setQuestions] = useState(data)

  return (
    <div className="container">
        <h3>سوالی برایتان پیش آمده؟</h3>
        <div className="info">
          {
            questions.map((question) => {
              return <SingleQuestion key={questions.id}  {...question} />
            })
          }
        </div>
    </div>
  );
}

export default App;
