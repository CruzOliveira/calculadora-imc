import { Stack, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Botao from 'Componentes/Botao/Calcular';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../store/actions/todos';

class Formulario extends Component {
  state = {
    nome: '',
    cpf: '',
    idade: '',
    dtNaci: '',
    altura: '',
    peso: '',
    imc: '',
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addTodo(this.state.nome);
    this.props.addTodo(this.state.idade);
    this.props.addTodo(this.state.dtNaci);
    this.props.addTodo(this.state.altura);
    this.props.addTodo(this.state.peso);
    this.props.addTodo(this.state.imc);

    this.setState({
      nome: '',
      cpf: '',
      idade: '',
      dtNaci: '',
      altura: '',
      peso: '',
      imc: '',
    });
  };
  render() {
    return (
      <Box
        m={10}
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '60ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={this.handleSubmit}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <TextField
              onChange={(e) => this.setState({ nome: e.target.value })}
              value={this.state.nome}
              required
              id="outlined-required"
              label="Nome"
            />
            <TextField
              onChange={(e) => this.setState({ cpf: e.target.value })}
              value={this.state.cpf}
              required
              id="outlined-required"
              label="CPF"
            />
            <TextField
              onChange={(e) => this.setState({ idade: e.target.value })}
              value={this.state.idade}
              required
              id="outlined-required"
              label="Idade"
            />
          </Stack>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <TextField
              onChange={(e) => this.setState({ dtNaci: e.target.value })}
              value={this.state.dtNaci}
              required
              id="outlined-required"
              label="Data de Nacimento"
            />
            <TextField
              onChange={(e) => this.setState({ altura: e.target.value })}
              value={this.state.altura}
              required
              id="outlined-required"
              label="Altura"
            />
            <TextField
              onChange={(e) => this.setState({ peso: e.target.value })}
              value={this.state.peso}
              required
              id="outlined-required"
              label="Peso"
            />
          </Stack>
          <Botao />
        </form>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Formulario);
