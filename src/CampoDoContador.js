import React from 'react';

export default class CampoDoContador extends React.Component {
  handleOnChange = event => {
    this.props.callback(this.props.campo, event.target.value)
  }

  render() {
    return (
      <label>
        {this.props.campo}
        <input
          type="number"
          value={this.props.dado}
          onChange={this.props.callback}
        />
      </label>
    );
  }
}
