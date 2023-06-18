import React, { useState } from "react";
import { Post } from "./components/Post/Post";
import Comentario from "./components/Comentario/Comentario";

//!! Os trechos comentados fazem parte do exercício final !!
// !!!!! não descomentar ou modificar até lá !!!!!

export default function App() {
  const [textoNovoPost, setTextoNovoPost] = useState("")
  const [post, setPost] = useState({})
  //const [comentario, setComentario] = useState("")  

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
    setPost("")
  }

  const alterarCurtida = () => {
    // Altera o status de curtida do post
    const alterarCurtida = {
      ...post,
      curtido: !post.curtido
    }
    setPost(alterarCurtida)
  }

  // Exercício final de debug. Descomentar só depois de finalizar o debug de post
  const [comentario, setComentario] = useState("")
  function adicionaComentario() {
    const addComentario = {
     comentario: comentario
    }
    setComentario(addComentario)
   }

   const onChangeComentario = (e) => {
     setComentario(e.target.value)
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
        alteraCurtida={alterarCurtida}
        apagarPost={apagarPost}
        //onChangeComentarios={onChangeComentario}
        //adicionarComentario={adicionarComentario}
      />
      <Comentario
        onChangeComentario={onChangeComentario}
        adicionaComentario={adicionaComentario}
        comentario={comentario}
      />
    </div>
  );
}


/* # Desvendando o Mistério dos Bugs no React: Técnicas básicas de Debugging

# Bug

Programar é como ensinar o computador a realizar tarefas. Mas, ao contrário de como entendemos as instruções de forma flexível e subjetiva, **a máquina segue exatamente o que é dito**. **Quando damos instruções erradas ou incompletas, o computador as segue sem questionar.** É nesse momento que ocorre o chamado "bug" ou erro no programa.

Dizem que a palavra "bug" (inseto, em inglês) passou a ser usada para se referir a erros em códigos de computador. Uma história conta que uma vez, uma especialista chamada [Grace Hopper](https://pt.wikipedia.org/wiki/Grace_Hopper) percebeu que algo estava errado com seu computador. Naquela época, os computadores tinham partes mecânicas e a programação era feita de forma mecânica também. Então, quando alguma coisa física bloqueava o movimento dessas partes, a programação parava de funcionar.

![Grace Hopper no console do UNIVAC I, em 1960](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/59083f29-ef0e-49a2-91a1-ebc3a524ac2f/Grace_Hopper_and_UNIVAC.jpg)

Grace Hopper no console do UNIVAC I, em 1960

Grace descobriu que um inseto havia entrado na máquina e, ao removê-lo, o "código" voltou a funcionar corretamente. Assim, o termo "bug" começou a ser usado para se referir a erros em programas de computador.

💡 Não existe código sem bugs, existe código com bugs que ainda não foram encontrados.

## Debug

O termo "debug" é utilizado para descrever a atividade de identificar e solucionar problemas e falhas em código de computador. É um processo essencial para garantir o bom funcionamento de um software. Existem várias formas e ferramentas para isso, além de ser uma habilidade muito importante para toda pessoa desenvolvedora. Faz parte do dia-a-dia!

## Processo de Debug

### O que fazer quando o código der erro?

**O primeiro passo é não se desesperar!** Erros são comuns e fazem parte da vida de todo dev. Podemos encarar bugs como um jogo ou um mistério a ser resolvido.
Com calma e clareza do que está acontecendo, costuma ser mais tranquilo de achar o problema.

A partir daí, vamos quebrar o problema em **4 partes**:

1. Entenda o problema e sua origem.
2. Examine suas suposições.
3. Analise o código passo a passo.
4. Teste possíveis soluções.

### Passo 1: Entenda o problema e sua origem

A primeira coisa a fazer é **identificar claramente o problema** que você está tentando resolver. 

Comece fazendo duas perguntas: 
O que você esperava que seu código fizesse? O que aconteceu no lugar?

Com a pergunta **"o que aconteceu no lugar?"** vamos invariavelmente cair em duas situações: 

1. O código não executa (exceção*). 
2. Ou o código executa mas não funciona do jeito que eu estava esperando.

> * Uma **exceção** é um erro que impede o código de continuar executando. É quando a tela "explode" e exibe um erro. Bom sinal, pois temos uma sinalização clara do que aconteceu e onde. Se você não conhece a exceção, pesquise!
> 

### Passo 2: Examine suas suposições

Quando você escreveu o código, você esperava que ele funcionasse. Para isso, você fez uma série de suposições (Ex: eu supus que uma variável seria uma String). Lembre-se sempre de pensar nas coisas mais óbvias, que você normalmente não para pra pensar:

- Não existe nenhum erro de digitação no código?
    
    Procure por erros simples, como um onClick ou onChange sem camelCase, funções sendo chamadas sem os parênteses ou sem os parâmetros necessários,  etc.
    
- Está usando a função, estado, prop, etc. correta(o)?
    
    Verifique os nomes das variáveis que você está usando. Como foram declaradas? Se for o caso, qual o nome foi dado a ela na hora de passar por props? A função ou variável chamada é realmente a que você tinha a intenção de chamar? 
    
    Eventualmente declaramos diferentes funções/estados/variáveis com nomes similares e isso pode confundir na hora de chamar.
    
    Dica: Quando for trabalhar com props, copie o nome dado na prop para aquela variável/função, assim fica mais fácil de não errar na hora de acessar as props em outro componente.
    
- Você mudou alguma coisa que achou que não era relacionada ao problema?
    
    Às vezes mexemos em um trecho do código (ou mesmo apagamos) que não parecia ter uma relação com outra parte. É importante tentar se lembrar de tudo o que foi modificado antes de o código quebrar.
    
- Você esperava que uma variável tivesse um valor que ela não tem?
    
    Imprima as variáveis no console e verifique se todas elas têm o valor esperado. 
    

> **Dica:** Quando nós escrevemos algo, nosso cérebro já supõe que está certo. Se você estiver lendo, sem encontrar o erro, pode ser exaustivo. Muitas vezes vale mais parar um pouco de encarar o código e distrair o cérebro um pouco, assim conseguimos ter mais atenção ao voltar a ler o que escrevemos e encontrar os erros.
> 

### Passo 3: Analise o código passo a passo

Agora que você já tem uma visão melhor sobre o problema e já descartou algumas hipóteses, é hora de procurar mais a fundo aonde está o erro. Comece de onde você sabe ou imagina que o erro aconteceu e vá "voltando" no código até achá-lo. Nesse passo, você tem um grande aliado: o console!

O console mostra mensagens relevantes do que acontece. A principal função é prover informações para debug.

Níveis de log:

- Info/logs: sem uma relevância específica (geralmente informações que nós pedimos para serem impressas);
- **⚠️Warning:** (Aviso) Coisas que podem originar problemas;
- **❌Error:** (Erro) Problemas que não podem ser ignorados.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c1f7e89d-4b62-4c07-9952-0bd662079696/Untitled.png)

Podemos **usar o console.log para imprimir uma informação** que queremos no meio do código. Muito útil para debugar e analisar o seu código e podemos usá-lo para entender melhor por onde o código está passando, possibilitando entender quais dados as variáveis têm.

> **Dicas:** 
1. Ao olhar para o console, iremos ver o **erro** e o **arquivo da sua origem.** Alguns destes arquivos apontam para onde a variável foi consumida e não exatamente onde quebrou. Procure no console por um arquivo que você modificou para então iniciar a busca aos erros. 

2. **Caso não consiga entender o que significa o erro, use o tradutor.**

3. Foque nas palavras chave dos erros: “Cannot find module”, “is not defined”, “is not a function”, etc. (Aproveite esse momento para tentar entender o que cada um destes exemplos significa).

4. Copie o texto do erro e faça uma busca pelo termo. Assim você irá encontrar diversas sugestões de como corrigir.
> 

### Passo 4: Teste possíveis soluções

Quando você estiver investigando, não tenha medo de testar soluções! Modifique o código e veja se algo acontece, então tente entender as novas condições. 

É muito importante **entender** o que está acontecendo e quais foram as soluções encontradas. Arrumar bugs e encontrar soluções é uma das melhores formas de aprender mais e evitar que os mesmos erros ocorram no futuro.

> **Dicas:** 
1. **Faça testes conscientes!** Tente entender o que está acontecendo e fazer testes que te dão mais informações.

2. Lembre de **entender o que você pretende com cada teste** feito e qual o resultado aconteceu depois (é importante rastrear o que foi testado, para conseguir entender melhor o problema)

3. Caso precise pedir ajuda, relate o que você já tentou para fazer a correção do bug: eventualmente a lógica usada no teste foi correta, mas algum erro no processo acabou por prejudicá-lo.
> 

## Mais recursos

### Já tentei de tudo, e agora?

Depois de entender o problema e tentar as soluções mais comuns, o que fazer?
**Às vezes, o bug não é óbvio** e é muito difícil encontrá-lo. Ainda assim, sempre é possível resolver!

### Remova o código

Uma saída válida em casos extremos é **remover trechos do código até que o erro pare** de acontecer. O ideal é ir **comentando pequenas partes do código** e observar o comportamento. **Quando o erro para, sabemos que a última parte removida é a causadora do erro!**

### Apague e reinstale dependências

É possível que por algum motivo, os arquivos das **bibliotecas** que usamos (`node_modules`) **tenham sido instalados com algum problema**. Frequentemente isso pode ser resolvido apagando a pasta `node_modules` e o arquivo `package-lock` **(atenção: não remova o arquivo `package.json`)** e reinstalando as dependências com `npm install`.

### Use o Google

É muito difícil cairmos em bugs inéditos. Quando caímos em um bug, provavelmente existe algo sobre esse bug no Google. Para sabermos isso, basta copiar a mensagem de erro e colar no buscador. Acreditem: todos os devs usam essa técnica...

### Peça ajuda

Quando já tentou de tudo, não exite em pedir ajuda para um colega. Tenha certeza de que coletou a maior quantidade de informações possível sobre o problema.
Explique o que você sabe detalhadamente. Muitas vezes você entenderá a solução só de explicar!

> **Dica:** Muitas vezes é mais fácil encontrarmos erros em códigos que nós não escrevemos. Por isso oferecer ajuda com bugs de colegas e pedir ajuda com bugs no nosso código é muito importante!
> 

## Como melhorar?

### Conheça as ferramentas disponíveis

Existem muitas ferramentas úteis para debug, como o [Debug](https://code.visualstudio.com/docs/editor/debugging) do próprio VSCode. Falamos superficialmente de algumas, mas elas tem muitas funcionalidades extras. Estude e pesquise sobre elas! Isso pode facilitar muito a sua vida :)

### Pratique

💡 Não tenha medo de bugs. Faça um esforço para resolver problemas e entender as soluções. Criar bugs faz parte de programar: aceite isso! Ajude os colegas, isso traz mais experiência e agilidade.

> **Dicas:** 
1. Quanto mais nos expomos a bugs, mais fácil fica debugar um código.

2. Aproveite o fórum da turma para ler os bugs que aparecem e ajudar a buscar uma solução. Caso já tenha sido resolvido, leia e tente entender o que funcionou. Assim você conhece alguns erros e, caso tenha o mesmo problema, já terá alguma ideia de como resolver.
> */