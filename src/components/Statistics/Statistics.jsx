import { StatisticsItem } from "./Statistics.styled"

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (<>
    <ul>
      <StatisticsItem>
        <p>Good: {good}</p>
      </StatisticsItem>
            <StatisticsItem>
        <p>Neutral: {neutral}</p>
      </StatisticsItem>
            <StatisticsItem>
        <p>Bad: {bad}</p>
      </StatisticsItem>
            <StatisticsItem>
        <p>Total: {total(good, neutral, bad)}</p>
      </StatisticsItem>
            <StatisticsItem>
        <p>Positive percentage: {positivePercentage(good, bad)}</p>
        </StatisticsItem>
    </ul>
  </>
  )
}

export default Statistics