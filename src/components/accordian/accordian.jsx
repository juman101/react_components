import React, { useState } from 'react';
import data from './data';
import "./accordian.css"
const Accordion = () => {
  const [showAnswer, setShowAnswer] = useState([]);
  const [multiselect, setMultiselect] = useState(true);

  const toggleAnswer = (id) => {
    if(multiselect==true){
    let newArray = showAnswer.includes(id) ? showAnswer.filter(item => item !== id) : [...showAnswer, id];
    setShowAnswer(newArray);
    }
    else 
    {
        let newArray = showAnswer.includes(id) ? [] : [id];
        setShowAnswer(newArray);

    }
  };

  const multiple=()=>
  {
            setMultiselect(!multiselect);
            setShowAnswer([]);

  }


  return (
    <div>
      <div>
        <h1>ACCORDION</h1>
        <button onClick={multiple}>
       {multiselect?" multiselect ": "single select"}
        </button>
      </div>
      {data && data.length > 0 ? (
        <div className='acc'>
          {data.map((item, index) => (
            <div className='q' key={index}>
              <div className='ques'>{JSON.stringify(item.question)}</div>
              <div className='answer'>
                <button onClick={() => toggleAnswer(item.id)}>
                  {showAnswer.includes(item.id) ? '-' : '+'}
                </button>
              </div>
              {showAnswer.includes(item.id) && <div>{item.answer}</div>}
            </div>
          ))}
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Accordion;
