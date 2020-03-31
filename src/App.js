import React from 'react';
import CampoDoContador from './CampoDoContador';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      campos: ['inicio', 'fim', 'passo'],
      inicio: 0,
      fim: 0,
      passo: 0,
    }
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

        {this.state.campos.map(campo => (
          <CampoDoContador
            campo={campo}
            dado={this.state[campo]}
            callback={this.setInputData}
          />
        ))}

        <h1>componente do Contando</h1>

        <p>Curso do Lulu</p>
      </div>
    );
  }
}

export default App;
