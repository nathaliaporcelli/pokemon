# Desafio: API REST em TypeScript consumindo a PokeAPI

## Descrição do Teste

Este repositório contém um desafio onde você deverá criar uma API REST em TypeScript que consuma dados da **PokeAPI** ([https://pokeapi.co/](https://pokeapi.co/)). O objetivo é manipular os dados recebidos e disponibilizá-los através de endpoints, avaliando seu conhecimento em TypeScript, consumo de APIs e tratamento de dados.

---

## 📝 Etapas do Desafio

### Parte 1: Consumo da API de Pokémon  
- **Objetivo:** Desenvolver uma função que realize requisições à PokeAPI e obtenha uma lista de Pokémons.  
- **Critérios:**
  - Utilize **fetch** ou **axios** para consumir a PokeAPI.
  - Para cada Pokémon, colete:
    - **Nome**
    - **Altura** (em metros)
    - **Peso** (em kg)
    - **IMC (calculado)**
      - Fórmula:  
        ```text
        IMC = peso / (altura * altura)
        ```
      - **Conversão de Unidades:**  
        - O peso dos Pokémons é fornecido em hectogramas (hg) e deve ser convertido para **kg**.  
        - A altura é fornecida em decímetros (dm) e deve ser convertida para **metros**.
  - Em caso de falha na requisição, a API deve retornar uma mensagem de erro apropriada.

---

### Parte 2: Implementação da API Interna  
- **Objetivo:** Criar uma API REST simples que ofereça dois endpoints:  
  - **GET /pokemons:**  
    - Retorna uma lista de Pokémons com **nome**, **altura**, **peso**, **IMC** e **categoria**.  
    - **Categoria baseada no IMC:**
      - **"Leve"**: IMC menor que 10  
      - **"Médio"**: IMC entre 10 e 20  
      - **"Pesado"**: IMC maior que 20  

  - **GET /pokemons/:name:**  
    - Retorna os detalhes de um Pokémon específico (usando o nome no parâmetro) com os mesmos campos e categorias descritos acima.

---

### Parte 3: Validação de Autoria  
- **Objetivo:** Garantir que a solução seja autêntica e que o uso de ferramentas, como o ChatGPT, seja informado.  
- **Critérios:**
  - Incluir um arquivo **EXPLICACAO.md** explicando em suas próprias palavras:
    - Como desenvolveu a API.
    - Como realizou as conversões e o cálculo do IMC.
    - Quais foram os principais desafios encontrados.
  - Durante a entrevista técnica, você poderá ser solicitado a modificar ou adicionar pequenos ajustes ao código para confirmar que compreende a solução desenvolvida.

---

## 📊 Avaliação

1. **Organização e clareza do código:**  
   - O código está modular e bem estruturado?

2. **Uso de TypeScript:**  
   - As tipagens foram aplicadas corretamente?

3. **Consumo e transformação de dados:**  
   - A API externa foi consumida corretamente e os dados transformados de acordo com os critérios?

4. **Autoria e compreensão:**  
   - A explicação no arquivo **EXPLICACAO.md** demonstra um entendimento claro da lógica e das transformações realizadas?

---

## 🚀 Como Executar o Projeto

### Pré-requisitos:
- Node.js instalado ([Download Node.js](https://nodejs.org/))
- Gerenciador de pacotes npm ou yarn

### Instalação:
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git

# Acesse a pasta do projeto
cd nome-do-repositorio

# Instale as dependências
npm install
# ou
yarn install
