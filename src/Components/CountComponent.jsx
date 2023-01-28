import React from 'react';
import './CountComponent.css'

{/* Aide de google pour la syntaxe */}
class Counter extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      count: props.countValue,
      count:0
      
    };
    this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  
  reset() {
    this.setState({
      count: 0
    });
  }
  
  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div class = "container">
        <form>
          <label>
            Valeur: 
            {/* Aide de google pour écrire le onChange correctement */}
            <input type="number" min="0" onChange={(element) => this.setState({count: parseInt(element.target.value)})} />
          </label>
        </form>
        <p class ="form-p">Compteur: {this.state.count}</p>
        <div class ="align-button">
        <button onClick={this.decrement} class= "space-button">-</button>
        <button onClick={this.reset} class="space-button">Reset</button>
        <button onClick={this.increment} class = "space-button">+</button>
      </div>
      </div>

    );
  }
}

export default Counter;