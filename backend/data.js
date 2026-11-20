const { DatabaseSync } = require('node:sqlite')

const db = new DatabaseSync('database.db')

// create tables

db.exec(`
    
    PRAGMA foreign_keys = ON;

    CREATE TABLE users (
    id            INTEGER PRIMARY KEY AUTOINCREMENT,
    username      TEXT NOT NULL UNIQUE,
    email         TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,             
    display_name  TEXT NOT NULL,
    bio           TEXT,
    avatar_url    TEXT,
    role          TEXT NOT NULL DEFAULT 'author'
                    CHECK (role IN ('author', 'admin')),
    created_at    TEXT NOT NULL DEFAULT (datetime('now'))
    )

    CREATE TABLE posts (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  author_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title        TEXT NOT NULL,
  category TEXT NOT NULL,
  slug         TEXT NOT NULL UNIQUE,    
  excerpt      TEXT,
  body         TEXT NOT NULL,           
cover_image  TEXT,
  status       TEXT NOT NULL DEFAULT 'draft'
               CHECK (status IN ('draft', 'published')),
  published_at TEXT,                        
  created_at   TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at   TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE TABLE tags (
  id   INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE
);

CREATE TABLE post_tags (
  post_id INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  tag_id  INTEGER NOT NULL REFERENCES tags(id)  ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

CREATE TABLE comments (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id    INTEGER NOT NULL REFERENCES posts(id)    ON DELETE CASCADE,
  user_id    INTEGER NOT NULL REFERENCES users(id)    ON DELETE CASCADE,
  parent_id  INTEGER REFERENCES comments(id)          ON DELETE CASCADE,
  body       TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE likes (
  user_id    INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  post_id    INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (user_id, post_id)
);

CREATE INDEX idx_posts_author          ON posts(author_id);
CREATE INDEX idx_posts_status_pub      ON posts(status, published_at DESC);
CREATE INDEX idx_comments_post         ON comments(post_id, created_at);
CREATE INDEX idx_post_tags_tag         ON post_tags(tag_id);


`)

