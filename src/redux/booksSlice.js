import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: '1',
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      category: 'Fiction',
      description: 'A fantasy novel',
      rating: 4.8
    },
    {
      id: '2',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      category: 'Non-Fiction',
      description: 'A brief history of humankind',
      rating: 4.6
    },

    {
      id: '3',
      title: 'Henry The idiot',
      author: 'Debojytoi Ghosh',
      category: 'Non-Fiction',
      description: 'A untold story of Henry',
      rating: 5.0
    },

    {
      id: '4',
      title: 'Stuart The Little',
      author: 'Unknown',
      category: 'Fiction',
      description: 'A story of a mouse',
      rating: 4.8
    },

    {
      id: '5',
      title: '3 ididot',
      author: 'Rajkumar Hirani',
      category: 'Comedy Drama',
      description: 'A story of 3 boys in college ',
      rating: 5.0
    },

    {
      id: '6',
      title: 'Housefull 5',
      author: 'Sajid Nanadanwla',
      category: 'Fiction',
      description: 'A flop book',
      rating: 2.1
    },

    {
      id: '7',
      title: 'Hello baby',
      author: 'Yuval Harari',
      category: 'Fiction',
      description: 'A story on how 3 boys take care of a baby ',
      rating: 4.6
    }
  ]
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
