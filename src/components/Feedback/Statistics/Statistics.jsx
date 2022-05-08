import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  // const colorFeedback = () => {
  //   if (positivePercentage <= 33) {
  //     return "backgroundColor:: rgba(85, 227, 85, 0.4)";
  //   } else if (positivePercentage <= 66) {
  //     return "backgroundColor:: rgba(255, 255, 0, 0.4)";
  //   } else {
  //     return "backgroundColor:: rgba(249, 6, 6, 0.4)";
  //   }
  // }  w
  return (
    <ul className={style.statisticsList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li className={style.positive}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
