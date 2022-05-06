import { Component } from 'react';
import style from './Feedback.module.css';

export class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 100,
  };

  handleBtn = event => {
    const { name } = event.target;
    this.setState(prevState => {
      console.log(prevState);
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    this.setState({ total: `${good + neutral + bad}` });
  };

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div className={style.container}>
        <h2>Please leave feedback</h2>
        <button className={style.btn} name="good" onClick={this.handleBtn}>
          Good
        </button>
        <button className={style.btn} name="neutral" onClick={this.handleBtn}>
          Neutral
        </button>
        <button className={style.btn} name="bad" onClick={this.handleBtn}>
          Bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>Total: {this.state.total}</li>
          <li>Positive feedback: {this.state.positive}%</li>
        </ul>
      </div>
    );
  }
}
