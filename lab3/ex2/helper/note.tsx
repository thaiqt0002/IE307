import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { createTables, getNotes } from './db';

interface NoteContextType {
  notes: any[];
  loadNotes: () => void;
}

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export const NoteProvider = ({ children }: { children: ReactNode }) => {
  const [notes, setNotes] = useState<any[]>([]);
  
  useEffect(() => {
    createTables();
    loadNotes();
  }, [notes]);

  const loadNotes = () => {
    getNotes(setNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, loadNotes }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNote = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};