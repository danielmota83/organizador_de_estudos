import Button from '../Button'
import Timer from './Timer'
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from '../../common/utils/time'
import { ITarefa } from '../../types/tarefa';
import { useState } from 'react';

interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro({selecionado}: Props) {

    const [tempo, setTempo] = useState<number>();
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}> Escoolha um card e inicie o relógio </p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Timer/>
            </div>
            <Button
                texto = "Começar!"
            />
        </div>
        
    )
}