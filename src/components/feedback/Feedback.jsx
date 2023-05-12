import { Component } from 'react';
import css from './Feedback.module.css';

import { Navigate } from './navigate/Navigate';
import { Statistics } from './statistick/Statisticks';
import { Section } from './section/section';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeadback = name => {
    this.setState(lastState => {
      return { [name]: lastState[name] + 1 };
    });
  };
  totalFeadback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const { bad, neutral } = this.state;
    const total = this.totalFeadback();
    return Math.round(((total - bad - neutral) / total) * 100) || 0;
  }
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalFeadback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section>
          <div className={css.FeedbackWrapper}>
            <Navigate
              options={Object.keys(this.state)}
              onLeaveFeedback={this.leaveFeadback}
            />
            {total ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positive={positiveFeedback}
              />
            ) : (
              <p>Leave your feedback</p>
            )}
          </div>
        </Section>
      </>
    );
  }
}
