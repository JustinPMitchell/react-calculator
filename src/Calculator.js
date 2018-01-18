import React, {Component} from "react";
import './App.css';

var variable1 = "0";
var variable2 = "0";
var operator = "+";

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {equals: ""};

    this.handleChangeOne = this.handleChangeOne.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeOne(event) {
    variable1 = event.target.value;
    console.log(variable1);
  }

  handleChangeTwo(event) {
    variable2 = event.target.value;
    console.log(variable2);
  }

  handleChangeOperator(event) {
    operator = event.target.value;
    console.log(operator);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({equals: Math.round(eval(variable1 + operator + variable2) * 1000000)/1000000});
  }

  render() {
    return (
      <div className="container">
        <h1>Compute with React!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="number" onChange={this.handleChangeOne} step="any" />
          </label>
          <select name="operator" onChange={this.handleChangeOperator}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <label>
            <input type="number" onChange={this.handleChangeTwo} step="any" />
          </label>
          <input type="submit" value="=" />
          <label>
            <input type="number" value={this.state.equals} onChange={this.handleSubmit} />
          </label>

        </form>
      </div>
    );
  }
}

export default Calculator;