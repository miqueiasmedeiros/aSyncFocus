-- CreateEnum
CREATE TYPE "ReactionType" AS ENUM ('LIKE', 'LOVE', 'HAHA', 'WOW', 'SAD', 'ANGRY');

-- CreateTable
CREATE TABLE "User" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(120) NOT NULL,
  "email" VARCHAR(180) NOT NULL UNIQUE,
  "password" TEXT NOT NULL,
  "avatarUrl" VARCHAR(500),
  "emailVerified" BOOLEAN NOT NULL DEFAULT FALSE,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "Post" (
  "id" SERIAL PRIMARY KEY,
  "userId" INTEGER NOT NULL,
  "subject" VARCHAR(200) NOT NULL,
  "content" VARCHAR(2000) NOT NULL,
  "imageUrl" VARCHAR(500),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE "PostTopic" (
  "id" SERIAL PRIMARY KEY,
  "postId" INTEGER NOT NULL,
  "topic" VARCHAR(120) NOT NULL,
  CONSTRAINT "PostTopic_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "PostTopic_postId_idx" ON "PostTopic"("postId");

CREATE TABLE "Comment" (
  "id" SERIAL PRIMARY KEY,
  "postId" INTEGER NOT NULL,
  "userId" INTEGER NOT NULL,
  "comment" VARCHAR(1000) NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "Comment_postId_idx" ON "Comment"("postId");

CREATE TABLE "Reaction" (
  "id" SERIAL PRIMARY KEY,
  "postId" INTEGER NOT NULL,
  "userId" INTEGER NOT NULL,
  "type" "ReactionType" NOT NULL,
  CONSTRAINT "Reaction_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "Reaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "Reaction_postId_userId_key" ON "Reaction"("postId", "userId");
CREATE INDEX "Reaction_postId_idx" ON "Reaction"("postId");

CREATE TABLE "EmailVerificationToken" (
  "id" SERIAL PRIMARY KEY,
  "userId" INTEGER NOT NULL,
  "token" TEXT NOT NULL UNIQUE,
  "expirationDate" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "EmailVerificationToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "EmailVerificationToken_userId_idx" ON "EmailVerificationToken"("userId");
