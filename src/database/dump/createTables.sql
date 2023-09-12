CREATE TABLE IF NOT EXISTS "usuarios" (
  "id" SERIAL PRIMARY KEY,
  "nome" VARCHAR(50) NOT NULL,
  "email" VARCHAR(50) NOT NULL UNIQUE,
  "senha" VARCHAR(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS "categorias" (
  "id" SERIAL PRIMARY KEY,
  "descricao" VARCHAR(50) NOT NULL
);

CREATE TYPE "TIPO" AS ENUM ('entrada', 'saida');

CREATE TABLE IF NOT EXISTS "transacoes" (
  "id" SERIAL PRIMARY KEY,
  "descricao" VARCHAR(150) NOT NULL,
  "valor" INTEGER NOT NULL,
  "data" TIMESTAMP NOT NULL,
  "categoria_id" INTEGER NOT NULL,
  "usuario_id" INTEGER NOT NULL,
  "tipo" "TIPO" NOT NULL,
  FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id"),
  FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id")
);
