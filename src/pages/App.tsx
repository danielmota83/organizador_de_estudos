import React, {useState} from 'react';
import Cronometro from '../components/Cronometro';
import Form from '../components/Form';
import List from '../components/List';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []> ([]); 
  const [selecionado, setselecionado] = useState<ITarefa>();

  function selecionaTarefa (tarefaSelecionada: ITarefa){
    setselecionado(tarefaSelecionada);
  }
  return (
    <div className={style.AppStyle}>
        <Form setTarefas = {setTarefas}/>   
        <List 
          tarefas = {tarefas}
          selecionaTarefa = {selecionaTarefa}
        />  
        <Cronometro/>
    </div>
  );
}

export default App;
