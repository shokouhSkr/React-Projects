import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <section className="container">
        <div className="title">
          <h3>Questions And Answers About Login</h3>
        </div>

        <section className="info">
          {questions.map((question) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
