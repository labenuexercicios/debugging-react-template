import React from "react";
import { PostContainer } from "./styled";
import {Comentario} from "../Comentario/Comentario";


export const Post = (props) => {
  return (
    <PostContainer className={"post-container"}>
      <p>{props.post.texto}</p>
      <button onClick={() => props.alterarCurtida(props.post.id)}>
        {props.post.curtido ? "Descurtir" : "Curtir"}
      </button>
      <button onClick={() => props.apagarPost(props.post.id)}>Apagar</button>

      {/* Exercício final de debug. Descomentar só depois de finalizar o debug de post*/}
      <Comentario
        comentario={props.comentario}
        onChangeComentario={props.onChangeComentario}
        adicionaComentario={props.adicionaComentario}
        comentarioDoPost={props.post.comentario}
      />
    </PostContainer>
  );
};
