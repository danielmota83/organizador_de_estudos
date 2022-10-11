import React from "react";
import Button from "../Button";
import style from './Form.module.scss'

class Form extends React.Component {
    state = {
        tarefa: "",
        tempo: ""
    }

adicionarTarefa(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
}

    render(){
        return(
            <form className={style.novaTarefa} onSubmit = {this.adicionarTarefa.bind(this)}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Tarefa
                </label>
                <input
                type= "text"
                name = "tarefa"
                value ={this.state.tarefa}
                onChange = {event => this.setState({...this.state, tarefa: event.target.value})}
                id = "tarefa"
                placeholder="O que você quer estudar"
                required
                />
            </div>
            <div className={style.inputContainer}>
            <label htmlFor="tempo">
                Tempo
            </label>
            <input
            type= "time"
            step="1"
            name = "tempo"
            value ={this.state.tempo}
            onChange = {event => this.setState({...this.state, tempo: event.target.value})}
            id = "tempo"
            min="00:00:00"
            max = "02:00:00"
            required
            />
        </div>
        <Button type = "submit"
            texto="Adicionar"
        />
        </form>
        )
    }
        
    }

    export default Form