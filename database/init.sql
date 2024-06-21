--- question table
CREATE TABLE IF NOT EXISTS question (
  id uuid NOT NULL,
  text varchar(500) NOT NULL,
  type varchar(255) NOT NULL,
  created_at timestamp NOT NULL,
  updated_at timestamp,
  deleted_at timestamp
);

ALTER TABLE ONLY question ADD CONSTRAINT question_id_primary_key PRIMARY KEY (id);
---

--- choice table
CREATE TABLE IF NOT EXISTS choice (
  id uuid NOT NULL,
  question_id uuid NOT NULL,
  text varchar(500) NOT NULL,
  is_correct boolean NOT NULL,
  created_at timestamp NOT NULL,
  updated_at timestamp,
  deleted_at timestamp
);

ALTER TABLE ONLY choice ADD CONSTRAINT choice_id_primary_key PRIMARY KEY (id);
ALTER TABLE ONLY choice ADD CONSTRAINT choice_question_id_references FOREIGN KEY(question_id) REFERENCES question(id);
---

--- room table
CREATE TABLE IF NOT EXISTS room (
  id uuid NOT NULL,
  join_code integer NOT NULL,
  max_users integer NOT NULL,
  is_joinable boolean NOT NULL,
  created_at timestamp NOT NULL,
  updated_at timestamp,
  deleted_at timestamp
);

ALTER TABLE ONLY room ADD CONSTRAINT room_id_primary_key PRIMARY KEY (id);
---