// src/database/db.ts
import * as SQLite from 'expo-sqlite/legacy';

const db = SQLite.openDatabase('Notes', '1.0');

export const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT
      );`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS settings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        darkMode INTEGER DEFAULT 0,
        fontSize INTEGER DEFAULT 16
      );`
    );
  });
};

export const getNotes = (callback: (notes: string[]) => void) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM notes;',
      [],
      (_, { rows: { _array } }) => {
        callback(_array);
      }
    );
  });
};

export const addNote = (title: string, content: string, callback: () => void) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO notes (title, content) VALUES (?, ?);',
      [title, content],
      () => {
        callback();
      }
    );
  });
};

export const updateNote = (id: number, title: string, content: string, callback: () => void) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE notes SET title = ?, content = ? WHERE id = ?;',
      [title, content, id],
      () => {
        callback();
      }
    );
  });
};

export const deleteNote = (id: number, callback: () => void) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM notes WHERE id = ?;',
      [id],
      () => {
        callback();
      }
    );
  });
};

export const getSettings = (callback: (settings: any) => void) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM settings WHERE id = 1;',
      [],
      (_, { rows: { _array } }) => {
        callback(_array[0]);
      }
    );
  });
};

export const updateSettings = (darkMode: number, fontSize: number, callback: () => void) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE settings SET darkMode = ?, fontSize = ? WHERE id = 1;',
      [darkMode, fontSize],
      () => {
        callback();
      }
    );
  });
};