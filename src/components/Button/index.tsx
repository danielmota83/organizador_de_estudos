import React from 'react';

import style from './Button.module.scss'

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onclick?: () => void,
    children: React.ReactNode
}

function Button ({ onclick, type, children }: Props) {
    return (
        <button
        onClick={onclick} 
        type = {type}
        className={style.botao}>
        {children}
    </button>
)
    
}
// class Button1 extends React.Component<{
//     texto: string
//      type?: "button" | "submit" | "reset" | undefined, 
//      onClick?: () => void
//     }> {
//     render() {
//       const {type = "button", onClick } = this.props
//         return (
//         <button onClick={onClick} type = {type}className={style.botao}>
//                 {this.props.texto}
//             </button>
//         )
//     }
// }

export default Button;