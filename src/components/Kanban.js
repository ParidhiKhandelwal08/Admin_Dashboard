import React from 'react';
import { Container, Typography } from '@mui/material';
import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';

const board = {
  columns: [
    {
      id: 1,
      title: 'To Do',
      cards: [
        { id: 1, title: 'Card 1', description: 'Description 1' },
        { id: 2, title: 'Card 2', description: 'Description 2' }
      ]
    },
    {
      id: 2,
      title: 'In Progress',
      cards: [
        { id: 3, title: 'Card 3', description: 'Description 3' }
      ]
    },
    {
      id: 3,
      title: 'Done',
      cards: [
        { id: 4, title: 'Card 4', description: 'Description 4' }
      ]
    }
  ]
};

const Kanban = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Kanban Board
      </Typography>
      <Board
        initialBoard={board}
        allowAddCard={{ on: 'top' }}
        onCardNew={(draftCard) => ({ id: new Date().getTime(), ...draftCard })}
        renderColumnHeader={(column) => (
          <div className="kanban-column">
            <div className="kanban-column-title">{column.title}</div>
          </div>
        )}
        renderCard={(card) => (
          <div className="kanban-card">
            <div className="kanban-card-title">{card.title}</div>
            <div className="kanban-card-description">{card.description}</div>
          </div>
        )}
      />
    </Container>
  );
};

export default Kanban;
