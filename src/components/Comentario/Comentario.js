import React from 'react'
import { ComentarioSection } from './styled'

export function Comentario(props) {
    return (
        <ComentarioSection>
            <input placeholder="Adicionar comentario" />
            <button onClick={props.adicionaComentarios}>Comentar Post</button>
            <p>{props.comentario}</p>
        </ComentarioSection>
    )
}
