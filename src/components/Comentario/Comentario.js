import React from "react"
import { ComentarioStyle } from "./styled"
//import { Comentario } from "./components/Comentario/Comentario";

export default function Comentario (props) {
    return (
        <ComentarioStyle>
            <input placeholder={"Adicionar Comentario"} onChange={props.onChangeComentario}/>
            <button onClick={() => props.adicionaComentario()}>Comentar Post</button>
            <p>{props.comentario.comentario}</p>
        </ComentarioStyle>
    )
}
