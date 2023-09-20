import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import { Container } from './index.styled';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  const countPositiveFeedbackPercentage = (good, bad) => {
    const result = (good / (good + bad)) * 100;
    return `${Math.round(result)}%`;
  };

  const hendlerFeedback = e => {
    if (e.target.textContent === 'good') {
      setGood(good => good + 1);
    }
    if (e.target.textContent === 'neutral') {
      setNeutral(neutral => neutral + 1);
    }
    if (e.target.textContent === 'bad') {
      setBad(bad => bad + 1);
    }
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={hendlerFeedback}
        />
      </Section>
      <Section title="Statistics">
        {good > 0 || neutral > 0 || bad > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
