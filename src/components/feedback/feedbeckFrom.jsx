import { Component } from 'react';

class Fedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const targetName = e.target.dataset.name;

    this.setState(pre => {
      return {
        [targetName]: pre[targetName] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const persentFromTotal = Math.round((good * 100) / total);
    return persentFromTotal;
  }

  render() {
    return (
      <div className="container">
        <h1>Please leave feedback</h1>
        <button type="button" data-name="good" onClick={this.addFeedback}>
          Good
        </button>
        <button type="button" data-name="neutral" onClick={this.addFeedback}>
          Neutral
        </button>
        <button type="button" data-name="bad" onClick={this.addFeedback}>
          Bad
        </button>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad}</li>
          <li>
            {this.countTotalFeedback() > 0
              ? `Total: ${this.countTotalFeedback()}`
              : ''}
          </li>
          <li>
            {this.countTotalFeedback() > 0
              ? `Positive feedback: ${this.countPositiveFeedbackPercentage()}`
              : ''}
          </li>
        </ul>
      </div>
    );
  }
}
export default Fedback;
