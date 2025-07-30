import { useState } from 'react';

const Bookshelf = () => {
const [books, setBooks] = useState([
  { title: 'Fourth Wing', author: 'Rebecca Yarros' },
  { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
]);

  const [newBook , setNewBook ] = useState(defaultValues)

  const defaultValues = {
     title: '',
     author: '',
  }

 const handleInputChange = (event) => {
    const {name, value} = event.target 
      
    const updatedNewBook  = { ...newBook, [name]: value }

    setNewBook(updatedNewBook );
 }

   const handleSubmit = (event) => {
    event.preventDefault();

    
   }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
         <h3>Add a Book</h3>
         <form action="">
           
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
         {/* Form will go here */}
      </div>
         <div className="bookCardsDiv">{/* Book cards will display here */}</div>
    </div>

  );
};

export default Bookshelf;





