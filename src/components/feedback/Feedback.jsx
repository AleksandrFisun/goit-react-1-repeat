import { useState, useEffect } from 'react';
import css from './Feedback.module.css';

import { Navigate } from './navigate/Navigate';
import { Statistics } from './statistick/Statisticks';
import { Section } from './section/section';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const leaveFeadback = name => {
    if (name === 'good') {
      setGood(good + 1);
    } else if (name === 'neutral') {
      setNeutral(neutral + 1);
    } else if (name === 'bad') {
      setBad(bad + 1);
    }
  };
  useEffect(() => {
    setTotal(good + neutral + bad);
    setPositive(Math.round((good / total) * 100));
  }, [good, neutral, bad]);

  return (
    <>
      <Section>
        <div className={css.FeedbackWrapper}>
          <Navigate
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={leaveFeadback}
          />
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positive={positive}
            />
          ) : (
            <p>Leave your feedback</p>
          )}
        </div>
      </Section>
    </>
  );
};
