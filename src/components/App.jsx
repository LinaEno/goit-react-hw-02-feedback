import { Component } from "react";
import Section from "./Section";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  countTotalFeedback = (prevState) => {
    // console.log(state);
    // let totalFeedback = 0;
    // const tt = Object.values(prevState);
    // console.log(tt);
    // for (const value of tt){
    //   totalFeedback += value;
    //   console.log(totalFeedback);
    //   return totalFeedback;
    // }
   }
  countPositiveFeedbackPercentage = () => { 
    // let positiveFeedback = (this.state.good / this.countTotalFeedback()) * 100;
    // console.log(positiveFeedback);
    // return positiveFeedback;

  }
  countGoodFeedback = () => { 
    this.setState((prevState) => {
      return {
        good: prevState.good+1
      }
    })
  }
  countNeutralFeedback= () => { 
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral+1
      }
    })
  }
  countBadFeedback= () => { 
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1
      }
    })
  }
  
  render() {
    return <Section title="Please leave feedback"
      text='Statistics'
      onGoodFeedback={this.countGoodFeedback}
      onNeutralFeedback={this.countNeutralFeedback}
      onBadFeedback={this.countBadFeedback}
      good={this.state.good}
      neutral={this.state.neutral}
      bad={this.state.bad}
      total={this.countTotalFeedback}
      positive={this.countPositiveFeedbackPercentage} />
  }
}

export default App;