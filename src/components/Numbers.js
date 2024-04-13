import React, { useEffect } from "react";
import "./Numbers.css";

const Numbers = () => {
  useEffect(() => {
    const counterNum = document.querySelectorAll(".counter-numbers");
    const speed = 200;

    counterNum.forEach((currElement) => {
      const updateNumber = () => {
        const targetNumber = parseInt(currElement.dataset.number);
        const initialNum = parseInt(currElement.innerText);
        const incrementNumber = Math.trunc(targetNumber / speed);

        if (initialNum < targetNumber) {
          currElement.innerText = `${incrementNumber + initialNum}+`;
          setTimeout(updateNumber, 10);
        }
      };
      updateNumber();
    });
  }, []);

  return (
    <div className="section-work-data-wrapper">
      <section className="section section-work-data">
        <div className="container grid grid-four-column">
          <div>
            <h2 className="counter-numbers" data-number="2000">
              0+
            </h2>
            <p>project completed</p>
          </div>
          <div>
            <h2 className="counter-numbers" data-number="6000">
              0+
            </h2>
            <p>Happy Clients</p>
          </div>
          <div>
            <h2 className="counter-numbers" data-number="5000">
              0+
            </h2>
            <p>cup of coffee</p>
          </div>
          <div>
            <h2 className="counter-numbers" data-number="3000">
              0+
            </h2>
            <p>real professionals</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Numbers;
