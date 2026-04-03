-- Drop previous unique index (one reaction per user per post)
DROP INDEX IF EXISTS "Reaction_postId_userId_key";

-- Create new unique index (one reaction per type per user per post)
CREATE UNIQUE INDEX "Reaction_postId_userId_type_key" ON "Reaction"("postId", "userId", "type");
