import React from 'react';

export default class CampoDoContador extends React.Component {
  handleOnChange = event => {
    this.props.callback({
      campo:this.props.campo,
      dado: event.target.value
    })
  }

  render() {
    return (
      <label>
        {this.props.campo}
        <input
          type="number"
          value={this.props.dado}
          onChange={this.handleOnChange}
        />
      </label>
    );
  }
}
