import React from 'react';
import CampoDoContador from './CampoDoContador';

class App extends React.Component {
  state = {
    inicio: 0,
    fim: 0,
    passo: 0,
  }

  setInputData = ({ campo, dado }) => {
    this.setState({ [campo]: dado });
  }

  render(){
    return (
      <div id="app">
        <h1>Vamos contar!</h1>
        <p>
          {JSON.stringify(this.state)}
        </p>

        <CampoDoContador
          campo='inicio'
          dado={this.state.inicio}
          callback={this.setInputData}
        />

        <CampoDoContador
          campo='fim'
          dado={this.state.fim}
          callback={this.setInputData}
        />

        <CampoDoContador
          campo='passo'
          dado={this.state.passo}
          callback={this.setInputData}
        />

        <h1>componente do Contando</h1>

        <p>Curso do Lulu</p>
      </div>
    );
  }
}

export default App;
