import React, { Component } from 'react'

import Animal from './Animal'

class Animals extends Component {
  constructor() {
    super()

    this.state = {
      species: '',
      quantity: 0,
      imageUrl: ''
    }
  }

  handleChange = e => {
    let { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    let animal = this.state

    this.props.handleCreateAnimal(animal)
  }

  render() {
    return (
      <div>
        <h1>here are our animals!</h1>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 20}}>
          <input type="text" name="species" placeholder="species" onChange={this.handleChange}/>
          <input type="text" name="imageUrl" placeholder="image" onChange={this.handleChange}/>
          <input type="number" name="quantity" placeholder="quantity" onChange={this.handleChange}/>
          <button onClick={this.handleClick}>create animal</button>
        </div>
        {this.props.animals.map(animal => {
          return <Animal 
                    key={animal.id} animal={animal} 
                    updateAnimal={this.props.updateAnimal}
                    deleteAnimal={this.props.deleteAnimal} />
        })}
      </div>
    )
  }
}

export default Animals