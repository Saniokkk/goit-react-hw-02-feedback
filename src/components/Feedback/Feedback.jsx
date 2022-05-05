import { Component } from 'react';
import style from './Feedback.module.css';

export class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtn = event => {
    console.log(event.target.textContent);
  };

  countTotalFeedback = () => {};

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div className={style.container}>
        <h2>Please leave feedback</h2>
        <button className={style.btn} onClick={this.handleBtn}>
          Good
        </button>
        <button className={style.btn} onClick={this.handleBtn}>
          Neutral
        </button>
        <button className={style.btn} onClick={this.handleBtn}>
          Bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {}</li>
          <li>Neutral: {}</li>
          <li>Bad: {}</li>
        </ul>
      </div>
    );
  }
}
