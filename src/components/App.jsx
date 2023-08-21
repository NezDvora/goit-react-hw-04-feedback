import React, { useState } from 'react';
import { Section } from './Section/Section.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { Notification } from './Notification/Notification.jsx';

export const App = () => {
  const [state, setState] = useState ({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = event => {
    const value = event.target.textContent;
    setState(prevState => {
      return {...prevState, [value]: prevState[value] + 1 };
    });
  };

  const countTotalFeedback = () => {
    const feedbackValues = Object.values(state);
    const total = feedbackValues.reduce((prev, elem) => prev + elem, 0);
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    if (total !== 0) {
      const positive = Math.round((state.good / total) * 100);
      return positive;
    }
  };

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              stateValues={state}
              total={countTotalFeedback()}
              positive={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
