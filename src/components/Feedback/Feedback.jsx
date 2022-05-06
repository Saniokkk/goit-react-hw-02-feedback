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
      return {
        [name]: prevState[name] + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return { total: prevState.total + 1 };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(() => {
      // const { total, good } = this.state;
      // if (good === 1 && total === 1) {
      //   return { positive: 100 };
      // } else if (total === 1 && good === 0) {
      //   return { positive: 0 };
      // } else {
      //   return {
      //     positive: Math.round((good / (total)) * 100)
      //   }
      // }
    });
  };

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
