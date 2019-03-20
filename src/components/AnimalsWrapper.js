import React, { Component } from 'react'
import axios from 'axios'

import Animals from './Animals'

class AnimalsWrapper extends Component {
  constructor() {
    super();

    this.state = {
      animals: []
    }
  }

  updateAnimal = animal => {
    axios.put(`/api/animals/${animal.id}`, animal).then(res => {
      this.setState({
        animals: res.data
      })
    }).catch(err => console.log(err))
  }

  createAnimal = animal => {
    axios.post('/api/animals', animal).then(res => {
      this.setState({
        animals: res.data
      })
    }).catch(err => {
      console.log('an error ocurred while adding an animal:', err)
    })
  }

  componentDidMount() {
    axios.get('/api/animals').then(res => {
      this.setState({
        animals: res.data
      })
    }).catch(err => {
      console.log('we have a problem:', err)
    })
  }

  render() {
    return (
      <div>
        <Animals 
          animals={this.state.animals} 
          handleCreateAnimal={this.createAnimal} 
          updateAnimal={this.updateAnimal}/>
      </div>
    )
  }
}

export default AnimalsWrapper