import React from 'react'
import { ContainerComentario } from './styled'

export function Comentario(props) {
    return (
        <ContainerComentario>
            <input placeholder="Adicionar comentario" onChange={props.onChangeComentario} value={props.comentario}  />
            <button onClick={props.adicionaComentario}>Comentar Post</button>
            <p>{props.comentarioDoPost}</p>
        </ContainerComentario>
    )
}
