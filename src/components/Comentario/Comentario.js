import React from 'react'
import { Comentario } from './styles'

export default function Comentario(props) {
    return (
        <Comentario>
            <input placeholder="Adicionar comentario" />
            <button onclick={props.adicionaComentario}>Comentar Post</button>
            <p>{props.post.comentario}</p>
        </Comentario>
    )
}
