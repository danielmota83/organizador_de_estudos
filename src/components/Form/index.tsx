import React from "react";
import Button from "../Button";

class Form extends React.Component {
    render(){
        return(
            <form >
            <div>
                <label htmlFor="tarefa">
                    Tarefa
                </label>
                <input
                type= "text"
                name = "tarefa"
                id = "tarefa"
                placeholder="O que você quer estudar"
                required
                />
            </div>
            <div>
            <label htmlFor="tempo">
                Tempo
            </label>
            <input
            type= "time"
            step="1"
            name = "tempo"
            id = "tempo"
            min="00:00:00"
            max = "02:00:00"
            required
            />
        </div>
        <Button/>
        </form>
        )
    }
        
    }

    export default Form