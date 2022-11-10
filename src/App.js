import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Something went wrong");

    const responseData = await response.json();

    setTours(responseData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours().catch((error) => setError(error.message));
  }, []);

  const deleteTourHandler = (id) => {
    const updatedToursList = tours.filter((tour) => tour.id !== id);
    setTours(updatedToursList);
  };

  const refreshHandler = () => {
    setIsLoading(true);
    fetchTours();
  };

  const content = (
    <>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <Tours tours={tours} onDelete={deleteTourHandler} />
    </>
  );

  const refresh = (
    <main>
      <div className="title">
        <h2>No Tours Left</h2>
        <button className="btn" onClick={refreshHandler}>
          refresh
        </button>
      </div>
    </main>
  );

  return (
    <main>
      {isLoading && !error && <Loading />}
      {error && <h2>{error}</h2>}
      {!isLoading && !error && tours.length > 0 && content}
      {!isLoading && !error && tours.length === 0 && refresh}
    </main>
  );
}

export default App;
