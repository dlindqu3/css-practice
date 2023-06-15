import React from 'react';
import { quoteObjs } from '../quoteObjs';

function Quotes() {

  return (
    <div>
      <h3>Quotes</h3>
      { 
        quoteObjs.map((item, idx) => {
          return <div key={idx}>
                  <p>"{item.quote}"</p>
                  <p>-{item.speaker}</p>
                  <p>Posted by: {item.createdBy}</p>
                  <br />
                </div>
        })
      }
    </div>
  )
}

export default Quotes