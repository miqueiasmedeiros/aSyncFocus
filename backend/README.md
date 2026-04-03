# aSync — Backend

API REST para a rede social corporativa **aSync**, construída com Node.js, Express e TypeScript.

---

## Stack

| Ferramenta | Uso |
|---|---|
| **Node.js 20+** | Runtime |
| **Express** | Framework HTTP |
| **TypeScript** | Linguagem |
| **Prisma** | ORM |
| **PostgreSQL** | Banco de dados |
| **Zod** | Validação de DTOs |
| **JWT** | Autenticação |
| **Bcrypt** | Hash de senhas |
| **Nodemailer** | Envio de e-mails (SMTP) |
| **Multer** | Upload de arquivos |
| **Swagger** | Documentação da API |
| **Jest** | Testes |
| **Docker** | Ambiente de desenvolvimento |

---

## Pré-requisitos

- Node.js 20+
- Docker e Docker Compose (recomendado para o banco)

---

## Configuração

Copie o arquivo de exemplo e edite as variáveis:

```bash
cp .env.example .env
```

### Variáveis de ambiente

```env
# Banco de dados
DATABASE_URL=postgresql://user:password@localhost:5432/asyncdb

# JWT
JWT_SECRET=troque-por-um-segredo-forte
JWT_EXPIRES_IN=1d

# Servidor
PORT=8080
CORS_ORIGIN=http://localhost:4200

# E-mail (SMTP)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=user@example.com
SMTP_PASSWORD=sua-senha
APP_MAIL_FROM=no-reply@example.com

# URL base do frontend para links nos e-mails
APP_VERIFY_URL=http://localhost:4200/verify-email?token=
```

---

## Instalação e execução

### Desenvolvimento

```bash
# Suba o PostgreSQL via Docker
docker compose up -d db

# Instale as dependências
npm install

# Gere o Prisma Client e rode as migrations
npm run prisma:generate
npm run prisma:migrate

# Inicie em modo watch
npm run dev
```

API disponível em `http://localhost:8080`.

### Produção

```bash
npm run build
npm start
```

### Stack completa via Docker

```bash
docker compose up --build
```

---

## Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia em modo desenvolvimento (tsx watch) |
| `npm run build` | Compila TypeScript para `dist/` |
| `npm start` | Executa a versão compilada |
| `npm test` | Roda os testes com Jest |
| `npm run prisma:generate` | Gera o Prisma Client |
| `npm run prisma:migrate` | Aplica migrations pendentes |
| `npm run prisma:studio` | Abre o Prisma Studio |

---

## Documentação da API

Com o servidor rodando, acesse:

- Swagger UI: `http://localhost:8080/api-docs`

---

## Endpoints

### Autenticação — `/auth`

| Método | Rota | Descrição | Auth |
|---|---|---|---|
| `POST` | `/auth/register` | Cria conta e envia e-mail de verificação | — |
| `POST` | `/auth/login` | Login; retorna JWT | — |
| `GET` | `/auth/verify?token=` | Verifica e-mail pelo token | — |
| `POST` | `/auth/resend-verification?email=` | Reenvia e-mail de verificação | — |

> O login exige que o e-mail esteja verificado.

### Usuário — `/users`

| Método | Rota | Descrição | Auth |
|---|---|---|---|
| `GET` | `/users/me` | Retorna perfil do usuário logado | ✔ |
| `PUT` | `/users/me` | Atualiza nome e avatar | ✔ |
| `PUT` | `/users/me/change-password` | Troca de senha | ✔ |

### Posts — `/posts`

| Método | Rota | Descrição | Auth |
|---|---|---|---|
| `GET` | `/posts` | Lista todos os posts | opcional |
| `GET` | `/posts/:id` | Detalhe de um post | opcional |
| `POST` | `/posts` | Cria post | ✔ |
| `PUT` | `/posts/:id` | Edita post (apenas autor) | ✔ |
| `DELETE` | `/posts/:id` | Remove post (apenas autor) | ✔ |

### Comentários — `/comments`

| Método | Rota | Descrição | Auth |
|---|---|---|---|
| `GET` | `/comments/:postId` | Lista comentários de um post | ✔ |
| `POST` | `/comments` | Adiciona comentário | ✔ |
| `DELETE` | `/comments/:id` | Remove comentário (autor) | ✔ |

### Reações — `/reactions`

| Método | Rota | Descrição | Auth |
|---|---|---|---|
| `POST` | `/reactions` | Adiciona ou remove reação (toggle) | ✔ |

### Uploads — `/uploads`

| Método | Rota | Descrição | Auth |
|---|---|---|---|
| `POST` | `/uploads/avatar` | Faz upload de avatar | ✔ |
| `POST` | `/uploads/post-image` | Faz upload de imagem de post | ✔ |

### Admin — `/admin` *(requer perfil ADMIN)*

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/admin/users` | Lista todos os usuários |
| `POST` | `/admin/users` | Cria usuário (força troca de senha no primeiro acesso) |
| `PUT` | `/admin/users/:id` | Edita usuário (nome, e-mail, perfil) |
| `DELETE` | `/admin/users/:id` | Remove usuário |
| `GET` | `/admin/posts` | Lista todos os posts |
| `DELETE` | `/admin/posts/:id` | Remove qualquer post |

---

## Testes

```bash
npm test
```

Os testes usam Jest + Supertest e cobrem os fluxos de autenticação e posts.

---

## Estrutura do projeto

```
src/
├── config/          # Variáveis de ambiente e Prisma client
├── controllers/     # Handlers de rota
├── dtos/            # Schemas Zod de validação
├── mail/            # Configuração do Nodemailer
├── middlewares/     # Auth, validação, erros, admin
├── repositories/    # Acesso ao banco via Prisma
├── routes/          # Definição de rotas
├── services/        # Lógica de negócio
├── types/           # Extensões de tipos Express
└── utils/           # JWT, bcrypt, helpers de erro
prisma/
├── schema.prisma    # Modelos do banco
└── migrations/      # Histórico de migrations
```

---

## Modelos principais

- **User** — `id`, `name`, `email`, `password`, `avatarUrl`, `role (USER|ADMIN)`, `emailVerified`, `mustChangePassword`
- **Post** — `id`, `userId`, `subject`, `content`, `imageUrl`, `topics[]`
- **Comment** — `id`, `postId`, `userId`, `comment`
- **Reaction** — `id`, `postId`, `userId`, `type (LIKE|LOVE|HAHA|WOW|SAD|ANGRY)`
- **EmailVerificationToken** — `id`, `userId`, `token`, `expirationDate`
