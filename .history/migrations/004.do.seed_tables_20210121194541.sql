TRUNCATE
  "word",
  "language",
  "user";

INSERT INTO "user" ("id", "username", "name", "password")
VALUES
  (
    1,
    'guest',
    'GUEST',
    -- password = "pass"
    '$2a$10$fCWkaGbt7ZErxaxclioLteLUgg4Q3Rp09WW0s/wSLxDKYsaGYUpjG'
  );

INSERT INTO "language" ("id", "name", "user_id")
VALUES
  (1, 'Spanish', 1);

INSERT INTO "word" ("id", "language_id", "original", "translation", "next")
VALUES
  (1, 1, 'Amor', 'Love', 2),
  (2, 1, 'Envidia', 'Envy', 3),
  (3, 1, 'Lechuga', 'Lettuce', 4),
  (4, 1, 'Hongo', 'Fungus', 5),
  (5, 1, 'Aguila', 'Eagle', 6),
  (6, 1, 'Caballero', 'Knight', 7),
  (7, 1, 'Cima', 'Summit', 8),
  (8, 1, 'Menta', 'Mint', 9);
  (9, 1, 'Cangrejo', 'Crab', 10);
  (10, 1, 'Dinero', 'Money', );

UPDATE "language" SET head = 1 WHERE id = 1;

-- because we explicitly set the id fields
-- update the sequencer for future automatic id setting
SELECT setval('word_id_seq', (SELECT MAX(id) from "word"));
SELECT setval('language_id_seq', (SELECT MAX(id) from "language"));
SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));