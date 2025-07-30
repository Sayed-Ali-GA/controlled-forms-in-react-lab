import { useState } from 'react';

const Bookshelf = () => {

 const defaultValues = {
     title: '',
     author: '',
  }

  const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);

  const [newBook , setNewBook ] = useState(defaultValues)

    const handleInputChange = (event) => {
    const {name, value} = event.target  
    const updatedNewBook  = { ...newBook, [name]: value }

    setNewBook(updatedNewBook );
 }

   const handleSubmit = (event) => {
    event.preventDefault();
    setBooks([...books, newBook]);

    setNewBook(defaultValues)
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
         <h3>Add a Book</h3>

  <form onSubmit={handleSubmit}> 
           
     <label htmlFor="title">Title:</label>
      <input 
        type="text" 
        name="title" 
        id="title"
        value={newBook.title}
        onChange={handleInputChange}
      />

      <label htmlFor="author">Author:</label>
        <input 
        type="text" 
        name="author"
        id="author" 
        value={newBook.author}
        onChange={handleInputChange}
       />
  <button type="submit">Add Book</button>
  </form>
      </div>

       <div className="bookCardsDiv">
        {books.map((book, idx) => (
          <div key={idx}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Bookshelf;