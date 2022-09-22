import React from 'react';

const Home = () => {
  const style = {
    paddingBottom: '10px',
    color: '#c6e6ff',
    fontSize: '20px',
  };
  return (
    <section className="home">
      <h2 style={{ fontSize: '32px' }}>Welcome to our page!</h2>
      {/* eslint-disable-next-line max-len */}
      <p style={style}>Mathematics, I now see, is important because it expands the world. It is a point of entry into larger concerns. It teaches reverence. It insists one be receptive to wonder. It requires that a person pay close attention. To be made to consider a problem carefully discourages scattershot and slovenly thinking and encourages systematic thought, an advantage, so far as I can tell, in all endeavors. Abraham Lincoln said he spent a year reading Euclid in order to learn to think logically.</p>
      {/* eslint-disable-next-line max-len */}
      <p style={style}>One mystery for you. It&apos;s a simple speculation: Where do numbers come from? No one knows. Were they invented by human beings? Hard to say. They appear to be embedded in the world in ways that we can&apos;t completely comprehend. They began as measurements of quantities and grew into the means for the most precise expressions of the physical world — E = mc², for example.</p>
      {/* eslint-disable-next-line max-len */}
      <p style={style}>If human beings invented numbers and counting, then how is it that there are numbers such as primes that have attributes no one gave them? The grand and enfolding mystery is whether mathematics is created by human beings or exists independently of us in a territory adjacent to the actual world, the location of which no one can specify. Plato called it the non-spatiotemporal realm. It is the timeless nowhere that never has and never will exist anywhere but that nevertheless is.</p>
    </section>
  );
};

export default Home;
