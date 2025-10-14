import React from 'react';

const testimony = [
  {
    quote: "This platform helped us hire top talent faster than ever. The candidate matching is spot on.",
    author: "HR Manager, TechNova"
  },
  {
    quote: "We’ve streamlined our recruitment process and saved hours every week. Highly recommended.",
    author: "Talent Lead, FinEdge"
  },
  {
    quote: "The platform’s analytics gave us deep insights into our hiring funnel. A game changer.",
    author: "COO, HireSmart"
  }
];

const Testimony = () => {
  return (
    <section style={{ padding: '40px',  }}>
      <h2 style={{ textAlign: 'center', color:'#0b1f60e9' }}>Trusted by Leading Companies</h2>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
        {testimony.map((item, index) => (
          <div key={index} style={{
            width: '300px',
            backgroundColor: '#fff',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '6px 2px 5px rgba(246, 249, 255, 1)'
          }}>
            <p>"{item.quote}"</p>
            <strong>— {item.author}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimony;
 