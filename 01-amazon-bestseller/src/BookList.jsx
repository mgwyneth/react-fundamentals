import Book from './Book';
import { books } from './data';

const BookList = () => {
  return (
    <div>
      <h1>Best Seller Books</h1>
      <section className="book-list">
        {books.map((book, index) => {
          return <Book {...book} index={index} />;
        })}
      </section>
    </div>
  );
};
export default BookList;
