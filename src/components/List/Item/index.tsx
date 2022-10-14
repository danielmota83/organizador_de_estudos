import { ITarefa } from '../../../types/tarefa'
import style from '../List.module.scss'

interface Props extends ITarefa{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionda: ITarefa) => void
}


export default function Item (
    {tarefa,
        tempo,
        selecionado, 
        completado, 
        id,
        selecionaTarefa} : Props){
    return(
        <li className = {style.item} onClick = {() => selecionaTarefa({
            tarefa,
            tempo,
            selecionado,
            completado,
            id
        })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}