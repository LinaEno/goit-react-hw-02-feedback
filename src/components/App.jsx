import { Component } from "react";
import Section from "./Section";
import Notification from 'components/Notification';
import Statistics from 'components/Statistics';
import FeedbackOptions from "./FeedbackOptions";
import { logDOM } from "@testing-library/react";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad
    return total
  }

  countPositiveFeedbackPercentage = () => { 
    let positiveFeedback = Math.floor((this.state.good / this.countTotalFeedback()) * 100);
    return positiveFeedback;

  }
  // countGoodFeedback = () => { 
  //   this.setState((prevState) => {
  //     return {
  //       good: prevState.good+1
  //     }
  //   })
  // }
  // countNeutralFeedback= () => { 
  //   this.setState((prevState) => {
  //     return {
  //       neutral: prevState.neutral+1
  //     }
  //   })
  // }
  // countBadFeedback= () => { 
  //   this.setState((prevState) => {
  //     return {
  //       bad: prevState.bad + 1
  //     }
  //   })
  // }

  onLeaveFeedback = () => {
    // this.setState((option) => {
    //   console.log(option)
    //   const tt = Object.keys(option);
    //   console.log(tt)
    //   for (const key of tt) {
    //     console.log(key)
    //   //   console.log(option[key])
    //   return key+1
    //   }
    // })
    this.setState((prevState) => { 
      console.log(prevState)
      const values = Object.values(prevState);
      console.log(values)
      for (const value of values) {

        return value+1
      }

    })
  }
  
  render() {
    return <div>
      <Section title="Please leave feedback">
            <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() === 0
          ? <Notification message='There is no feedback' />
          : <Statistics good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positive={this.countPositiveFeedbackPercentage()} />}
      </Section>
      </div>
  }
}

export default App;