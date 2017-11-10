import React, { Component } from 'react'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
function tryConvert(temp, fn) {
  if(Number.isNaN(temp)) {return ''}
  const result = fn(temp);
  return Math.round(result * 1000) / 1000;
}
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temp, convert) {
  const input = parseFloat(temp);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.onTemperatureChange(
       e.target.value
  );
  }
  render() {
    const scale = this.props.scale;
    const temp = this.props.temp;

    return (
      <fieldset>
        <legend>Enter temp in {scaleNames[scale]}:</legend>
        <input value={temp} onChange={this.handleChange} />
      </fieldset>
    )
  }
}
class Boiling extends Component {
  constructor(props) {
    super(props)
    this.handleCchange = this.handleCchange.bind(this);
    this.handleFchange = this.handleFchange.bind(this);
    this.state = { temp: 0, scale:'c' }
  }
  handleCchange(value) {
    this.setState({ scale: 'c', temp: value });
  }
  handleFchange(value) {
    this.setState({ scale: 'f', temp: value });
  }

  onTemperatureChange(temp){
    this.setState({
      temp,
    })
  }
  render(){
    const temp = this.state.temp;
    const scale = this.state.scale;
    const celsius = scale === 'f' ? tryConvert(temp, toCelsius) : temp;
    const fahrenheit = scale === 'c' ? tryConvert(temp, toFahrenheit) : temp;

    return (
      <div>
        <TemperatureInput scale="c" temp={celsius} onTemperatureChange={this.handleCchange}/>
        <TemperatureInput scale="f" temp={fahrenheit} onTemperatureChange={this.handleFchange} />
      </div>
    )
  }

}
export default Boiling;