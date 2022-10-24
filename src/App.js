import React, { useState } from "react";
import {Post} from "./components/Post/Post";

//!! Os trechos comentados fazem parte do exercício final !!
// !!!!! não descomentar ou modificar até lá !!!!!

export default function App() {
  const [textoNovoPost, setTextoNovoPost] = useState("")
  const [post, setPost] = useState({})
  const [comentario, setComentario] = useState("")

  const onChangeTextoNovoPost = (event) => {
    setTextoNovoPost(event.target.value);
  }

  const adicionarPost = () => {
    // Adiciona um post
    const novoPost = {
      id: Date.now(),
      texto: textoNovoPost,
      curtido: false
    }

    setPost(novoPost)
  }

  const apagarPost = () => {
    // Apaga o post enviado
    setPost({})
  }

  const alterarCurtida = () => {
    // Altera o status de curtida do post
    const alterarCurtida = {
      ...post,
      curtido: post.curtido
    }
    setPost(alterarCurtida)
  }

  // Exercício final de debug. Descomentar só depois de finalizar o debug de post
  function adicionaComentario() {
    const addComentario ={
      comentario: comentario
    }
    setComentario(addComentario)
  }

  const onChangeComentario = (event) => {
    setComentario(event.target.value)
  }


  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeTextoNovoPost}
          value={textoNovoPost}
        />
        <button onClick={adicionarPost}>Adicionar</button>
      </div>
      <br />
      <Post
        post={post}
        alterarCurtida={alterarCurtida}
        apagarPost={apagarPost}
        onChangeComentarios={onChangeComentario}
        adicionaComentarios={adicionaComentario}
        comentario={comentario}
      />
    </div>
  );
}

