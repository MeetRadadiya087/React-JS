import React, { useEffect, useState } from 'react';

const FetchDataComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        
        if (response.ok) {
          const result = await response.json();
          setData(result);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="card-container">
      <ul className="main-div">
        {data.map((e, i) => (
          <li key={i} className="card">
            <div className="card-content">
              <img src={e.image} alt={e.title} className="card-image" />
              <h3 className="card-title">{e.title}</h3>
              <p className="card-price">${e.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataComponent;
