
# Projeto ONG

Projeto desenvolvido para a atividade 1 do Projeto Integrador Extensionista II.

## Tecnologias utilizadas

- Vite+
- JavaScript
- Node.js
- Express
- pnpm

## Funcionalidades

- Página inicial com verificação da API.
- API Express com rota GET /api/health.
- Exibição do status da API e data e hora.

## Como executar o projeto

### 1. Instalar as dependências

```bash
pnpm install
```

### 2. Iniciar a API

```bash
pnpm run api
```

### 3. Iniciar a página

Em outro terminal, execute:

```bash
vp dev
```

Acesse no navegador:

http://localhost:5173/

## Rota da API

GET /api/health

Retorna o status da API e a data e hora atuais.
## Estrutura do projeto

- `src/`: arquivos da interface do usuário.
- `server/`: servidor da API Express.
- `server/index.js`: rota de verificação da API.
- `.env.example`: exemplo de configuração de ambiente.
- `vite.config.ts`: configuração do Vite e proxy da API.
