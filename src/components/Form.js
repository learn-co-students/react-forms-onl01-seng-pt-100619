import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          onChange={event => this.handleFirstNameChange(event)}
          value={this.state.firstName}
        />
        <input
          type="text"
          onChange={event => this.handleLastNameChange(event)}
          value={this.state.lastName}
        />
      </form>
    )
  }
}
export default Form;