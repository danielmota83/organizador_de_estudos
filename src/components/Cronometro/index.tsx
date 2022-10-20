import Button from '../Button'
import Timer from './Timer'
import style from './Cronometro.module.scss'
import { tempoParaSegundos } from '../../common/utils/time'
import { ITarefa } from '../../types/tarefa';
import { useEffect, useState } from 'react';

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Cronometro({selecionado, finalizarTarefa}: Props) {

    const [isRunning, setIsRunning] = useState(false);

    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado])

       
    function regressiva(contador:number = 0){
        setTimeout(()=>{

            if(contador >0 ) {
                setTempo(contador - 1);
                return regressiva (contador - 1)
            }
            finalizarTarefa ();

        }, 1000)
    }

    
    // function parar () {
    //    setTempo(0)
      
       
       
    // }

    // function resetar (contador:number = 0) {
    //     setTempo(tempoParaSegundos(selecionado.tempo))
    //     clearTimeout(contador)
    // }


        

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}> Escolha uma tarefa e inicie o cronômetro </p>
            <div className={style.relogioWrapper}>
                <Timer tempo={tempo}/>
            </div>
            <Button onclick={()=> regressiva(tempo)}>
                Começar
                </Button>
                <Button onclick={()=> {setTempo (0), regressiva(0)}}>
                Parar
                </Button>
                {/* <Button onclick={()=> resetar(tempo)}>
                Resetar
                </Button> */}

        </div>
        
    )
}


