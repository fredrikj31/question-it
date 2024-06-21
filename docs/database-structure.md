# Database Structure

This is a chart showing the current database structure and which relationships there are between the tables

```mermaid
erDiagram
  question {
    id string PK
    text string(500)
    type string(255)
    created_at timestamp
    updated_at timestamp "nullable"
    deleted_at timestamp "nullable"
  }

  choice {
    id string PK
    question_id string FK
    text string(500)
    is_correct boolean
    created_at timestamp
    updated_at timestamp "nullable"
    deleted_at timestamp "nullable"
  }

  room {
    id string PK
    join_code string
    max_users integer
    is_joinable boolean
    created_at timestamp
    updated_at timestamp "nullable"
    deleted_at timestamp "nullable"
  }

  question ||--|{ choice : question_id
```
