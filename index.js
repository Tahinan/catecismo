const perguntas = [
    {
      pergunta: "Qual é o primeiro mandamento do Decálogo?",
      respostas: [
        "Amar a Deus sobre todas as coisas",
        "Não ter outros deuses além de Deus",
        "Não pronunciar o nome de Deus em vão",
      ],
      correta: 0
    },
    {
      pergunta: "Quantos são os mandamentos da Igreja?",
      respostas: [
        "Cinco",
        "Dez",
        "Sete",
      ],
      correta: 0
    },
    {
      pergunta: "Quais são as três virtudes teologais?",
      respostas: [
        "Fé, Esperança e Caridade",
        "Prudência, Justiça e Fortaleza",
        "Piedade, Fé e Obediência",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o sacramento que perdoa os pecados?",
      respostas: [
        "Confirmação",
        "Batismo",
        "Confissão",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o autor principal da Bíblia?",
      respostas: [
        "Jesus Cristo",
        "O Papa",
        "O Espírito Santo",
      ],
      correta: 2
    },
    {
      pergunta: "Quantos sacramentos existem na Igreja Católica?",
      respostas: [
        "Sete",
        "Dez",
        "Cinco",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o sacramento da cura dos enfermos?",
      respostas: [
        "Ordem",
        "Unção dos Enfermos",
        "Confissão",
      ],
      correta: 1
    },
    {
      pergunta: "O que é a Transubstanciação?",
      respostas: [
        "A mudança do pão e do vinho no corpo e sangue de Cristo",
        "O perdão dos pecados",
        "A transformação do fiel após a morte",
      ],
      correta: 0
    },
    {
      pergunta: "Quem são os apóstolos de Jesus?",
      respostas: [
        "Os seguidores fiéis de Jesus",
        "Os discípulos que o traíram",
        "Os doze homens que Jesus escolheu e enviou para pregar o Evangelho",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do sacramento que consagra os ministros da Igreja?",
      respostas: [
        "Eucaristia",
        "Ordem",
        "Confirmação",
      ],
      correta: 1
    },
  ];
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostraTotal = document.querySelector('#acertos span')
  mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent =item.pergunta
  
    for(let resposta of item.respostas){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
        }
        mostraTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }