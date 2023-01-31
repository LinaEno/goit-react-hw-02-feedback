import { Component } from "react";
import Section from "./Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  countTotalFeedback() { }
  countPositiveFeedbackPercentage() { }
  // countGoodFeedback() { 
  //   this.setState((prevState) => {
  //     good: prevState.good+1
  //   })
  // }
  // countNeutralFeedback() { 
  //   this.setState((prevState) => {
  //     neutral: prevState.neutral+1
  //   })
  // }
  // countBadFeedback() { 
  //   this.setState((prevState) => {
  //     bad: prevState.bad+1
  //   })
  // }
  
  render() {
    return <Section title="Please leave feedback"/>
  }
}

export default App;