import React, { Component } from 'react'

class Animal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.animal.id,
      species: props.animal.species,
      quantity: props.animal.quantity,
      imageUrl: props.animal.imageUrl,
      edit: false
    }
  }

  handleChange = e => {
    let { name, value } = e.target

    this.setState({
      [name]: value
    })
  }

  handleEditClick = () => {
    this.setState({
      edit: true
    })
  }

  handleUpdateClick = () => {
    this.props.updateAnimal(this.state)
    this.setState({
      edit: false
    })
  }

  handleDeleteClick = () => {
    this.props.deleteAnimal(this.state.id)
    this.setState({
      edit: false
    })
  }

  render() {
    return this.state.edit ? (
      <div>
        <input type="text" name="species" value={this.state.species} onChange={this.handleChange}/>
        <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange}/>
        <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleChange}/>
        <button onClick={this.handleUpdateClick}>update animal</button>
        <button onClick={this.handleDeleteClick}>delete animal</button>
      </div>
    ) : (
      <div>
      <img src={this.props.animal.imageUrl} alt="" width="200"/>
      <p>{this.props.animal.species}</p>
      <p>{this.props.animal.quantity}</p>
      <button onClick={this.handleEditClick}>edit</button>
    </div>
    )
  }
}

export default Animal