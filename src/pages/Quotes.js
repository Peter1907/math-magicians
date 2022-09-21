import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [state, setState] = useState({
    author: '',
    quote: '',
  });

  useEffect(() => {
    fetch('https://random-math-quote-api.herokuapp.com/').then((res) => res.json()).then((data) => {
      setState({
        author: data.author,
        quote: data.quote,
      });
    });
  }, []);

  return (
    <section className="quotes">
      <p style={{ fontSize: '24px', paddingBottom: '20px' }} className="quote">{state.quote}</p>
      <p 
        style={{
          fontSize: '26px',
          fontStyle: 'italic',
          fontFamily: "'Goudy Bookletter 1911', serif",
          color: '#c6e6ff',
        }}
        className="author">
        _
        {state.author}
        .
      </p>
    </section>
  );
};

export default Quote;
