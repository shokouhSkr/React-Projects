import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`);

    const responseData = await response.json();

    setJobs(responseData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs().catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
  }, []);

  const showCompanyHandler = (newValue) => {
    setValue(newValue);
  };

  if (isLoading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section loading">
        <h1>{error}</h1>
      </section>
    );
  }

  // We wrote it here down, because at first our jobs is an empty array, then we fetch data, now here we can use it
  const { title, dates, duties, company } = jobs[value];

  return (
    <section className="section">
      {/* title */}
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>

      <div className="jobs-center">
        {/* jobs-buttons */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            const { id, company } = job;

            return (
              <button
                key={id}
                type="button"
                onClick={() => showCompanyHandler(index)}
                className={`job-btn ${value === index && "active-btn"}`}
              >
                {company}
              </button>
            );
          })}
        </div>

        {/* jobs-info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>

      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;
