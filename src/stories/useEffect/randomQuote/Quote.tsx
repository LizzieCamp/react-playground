import React, { useEffect, useState } from "react";

export const Quote = () => {
  const [quote, setQuote] = useState("Starting message");
  const [userInput, setUserInput] = useState(false);

  const getList = async () => {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const quotes = await response.json();
    quotes.map((quoteOne: any) => {
      setQuote(quoteOne.content); 
    });
  };

  useEffect(() => {
    if (userInput) {
      getList();
      setUserInput(false);
    }
  }, [userInput]);

  return (
    <div>
      <button onClick={() => setUserInput(true)} placeholder="button value">
        Generate new quote here
      </button>
      <h1 placeholder="quote value">{quote}</h1>
    </div>
  );
};

export default Quote;
