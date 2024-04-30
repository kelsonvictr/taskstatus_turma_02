# Guia de Configuração de Tarefas

## Introdução

Este guia detalha como configurar e gerenciar tarefas usando arquivos JavaScript no projeto. Siga as instruções abaixo para criar e configurar seu arquivo de tarefas.

## Adicionando novo membro no `loadTasks.js`

No arquivo **scripts/loadTasks.js** adicione seu-nome na constante "teamMembers", não esqueça da vírgula ao fim do penúltimo item da lista, antes de inserir o seu-nome. Exemplo:

```javascript
const teamMembers = [
    'kelson-almeida', 
    'victor-almeida',
    'fulano-silva'
]; 
```

## Estrutura de Diretórios

1. **Navegue até o diretório `db`** no projeto.
2. **Crie uma nova pasta** com seu nome. Por exemplo: `kelson-almeida`.
3. Dentro da sua pasta nomeada, **crie um arquivo chamado `tasks.js`**.

## Configurando seu Arquivo `tasks.js`

Dentro do arquivo `tasks.js`, você deve criar uma variável contendo uma lista de objetos que representam suas tarefas. Use a seguinte sintaxe:

```javascript
var seu_nome_tasks = [
    {
        "name": "Nome da Tarefa",
        "description": "Descrição da tarefa",
        "responsible": "Responsável pela tarefa",
        "status": "status"
    },
    // Adicione mais tarefas conforme necessário
];
```
Substitua seu_nome pelo seu nome, mantendo o formato em snake_case (por exemplo, kelson_almeida_tasks).

Exemplo completo:

```javascript
var kelson_almeida_tasks = [
    {
        "name": "Testando 1",
        "description": "Descrição desse card",
        "responsible": "Prof. Kelson",
        "status": "backlog"
    },
    {
        "name": "Testando 2",
        "description": "Descrição desse card",
        "responsible": "Prof. Kelson",
        "status": "in_progress"
    },
    {
        "name": "Testando 3",
        "description": "Descrição desse card",
        "responsible": "Prof. Kelson",
        "status": "concluded"
    },
];
```

## Criando uma Pull Request

1. Crie uma branch baseada na branch **main** mais atualizada. Escolha a seguinte nomenclatura: Em caso de nova(s) tarefa(s): **feature/nome-da-tarefa**. Em caso de correção de alguma tarefa existente: **hotfix/nome-da-tarefa**.
2. Faça um Pull Request para a branch main.
3. Adicione revisores ao seu Pull Request: inclua o Professor e Higor Souza.