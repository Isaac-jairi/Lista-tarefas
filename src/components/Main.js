import React, {Component} from 'react';
import './Main.css'

import Form from './Form'
import Tarefas from './Tarefas'

export default class Main extends Component{
  state = {
    novaTarefa:'',
    tarefas:[],
    indexEdicao: -1
  }

  componentDidMount(){
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if(!tarefas) return
    this.setState({tarefas});
  }

  componentDidUpdate(prevProps, prevState){
    const {tarefas} = this.state;

    if (tarefas === prevState.tarefas) return

    localStorage.setItem('tarefas',JSON.stringify(tarefas));

  }

  handleSubmit =(e)=>{
    let {tarefas, novaTarefa, indexEdicao} = this.state;
    e.preventDefault();

    if (indexEdicao ==-1) {
      novaTarefa = novaTarefa.trim();
      if (!tarefas.includes(novaTarefa)) {
        this.setState({
          tarefas: [...tarefas,novaTarefa]
        })
      }
      this.setState({
        novaTarefa:'',
      })
    }else{
      if (!tarefas.includes(novaTarefa)) {
        tarefas[indexEdicao] = novaTarefa
        this.setState({
          tarefas: [...tarefas],
          indexEdicao: -1
        })
        this.setState({
          novaTarefa:'',
        })
      }
    }

  }

  handleChange=(e)=>{
    this.setState({
      novaTarefa:e.target.value,
    })
  }

  handleEdit=(e, index)=>{
    const {tarefas} = this.state;

    this.setState({
      indexEdicao: index
    })

    this.setState({
      novaTarefa: tarefas[index],
    })
  }

  handleDelete=(e, index)=>{
    const {tarefas} = this.state;
    let novasTarefas = [...tarefas]
    novasTarefas.splice(index,1)
    this.setState({
      tarefas: novasTarefas
    })
  }

  render(){
    const {novaTarefa, tarefas,indexEdicao} = this.state;
    return (
      <div className='main'>
        <h1>Lista de Tarefas</h1>
        <Form
          handleSubmit = {this.handleSubmit}
          handleChange = {this.handleChange}
          indexEdicao = {indexEdicao}
          novaTarefa = {novaTarefa}
        />
        <Tarefas
          handleEdit = {this.handleEdit}
          handleDelete = {this.handleDelete}
          tarefas = {tarefas}
        />
      </div>
    )
  }
}
