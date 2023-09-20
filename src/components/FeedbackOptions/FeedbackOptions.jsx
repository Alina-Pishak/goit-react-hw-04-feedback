import {FeedbackList, FeedbackBtn} from "./FeedbackOptions.styled"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map((option, idx) => {
        return <li key={idx}>
          <FeedbackBtn onClick={onLeaveFeedback}>{option}</FeedbackBtn>
        </li>
      })}
    </FeedbackList>
  );
}

export default FeedbackOptions