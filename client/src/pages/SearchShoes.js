import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
import { saveShoesIds, getSavedShoesIds } from '../utils/localstorage.js';
import { useMutation } from '@apollo/react-hooks';
import { SAVE_SHOE } from '../utils/mutations';

const SearchShoes = () => {
  // create state for holding returned api data
  const [searchedShoes, setSearchedBShoes] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved shoeId values
  const [savedShoeIds, setSavedShoeIds] = useState(getSavedShoeIds());

  const [saveShoe, { error }] = useMutation(SAVE_SHOE);

  // set up useEffect hook to save `savedShoeIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveShoeIds(savedShoeIds);
  });

  // create method to search for shoes and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
    //   const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const shoeData = items.map((book) => ({
        // shoeId: shoe.id,
        // authors: book.volumeInfo.authors || ['No author to display'],
        // title: book.volumeInfo.title,
        // description: book.volumeInfo.description,
        // image: book.volumeInfo.imageLinks?.thumbnail || '',
      }));

      setSearchedShoes(shoeData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving shoe to our database
  const handleSaveShoe = async (shoeId) => {
    // find the shoe in `searchedShoes` state by the matching id
    const shoeToSave = searchedBooks.find((shoe) => shoe.shoeId === shoeId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await saveShoe({
        variables: { shoeData: { ...shoeToSave } },
      });
      console.log(savedShoeIds);
      setSavedShoeIds([...savedShoeIds, shoeToSave.shoeId]);
    } catch (err) {
      console.error(err);
    }
  };

//   return (
//     <>
//       <Jumbotron fluid className='text-light bg-dark'>
//         <Container>
//           <h1>Search for Books!</h1>
//           <Form onSubmit={handleFormSubmit}>
//             <Form.Row>
//               <Col xs={12} md={8}>
//                 <Form.Control
//                   name='searchInput'
//                   value={searchInput}
//                   onChange={(e) => setSearchInput(e.target.value)}
//                   type='text'
//                   size='lg'
//                   placeholder='Search for a book'
//                 />
//               </Col>
//               <Col xs={12} md={4}>
//                 <Button type='submit' variant='success' size='lg'>
//                   Submit Search
//                 </Button>
//               </Col>
//             </Form.Row>
//           </Form>
//         </Container>
//       </Jumbotron>

//       <Container>
//         <h2>
//           {searchedBooks.length
//             ? `Viewing ${searchedBooks.length} results:`
//             : 'Search for a book to begin'}
//         </h2>
//         <CardColumns>
//           {searchedBooks.map((book) => {
//             return (
//               <Card key={book.bookId} border='dark'>
//                 {book.image ? (
//                   <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' />
//                 ) : null}
//                 <Card.Body>
//                   <Card.Title>{book.title}</Card.Title>
//                   <p className='small'>Authors: {book.authors}</p>
//                   <Card.Text>{book.description}</Card.Text>
//                   {Auth.loggedIn() && (
//                     <Button
//                       disabled={savedBookIds?.some((savedBookId) => savedBookId === book.bookId)}
//                       className='btn-block btn-info'
//                       onClick={() => handleSaveBook(book.bookId)}>
//                       {savedBookIds?.some((savedBookId) => savedBookId === book.bookId)
//                         ? 'This book has already been saved!'
//                         : 'Save this Book!'}
//                     </Button>
//                   )}
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
};

export default SearchShoes;