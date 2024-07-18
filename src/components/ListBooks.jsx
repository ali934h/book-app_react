// ListBooks.jsx
// A React component that displays a list of books with functionalities for liking and searching books, using state hooks to manage likes, book data, and search input.

import icons from "../assets/imgs/icons/icons.svg"; // Importing SVG icons
import BookCard from "./BookCard"; // Importing the BookCard component
import bookData from "../constants/data.js"; // Importing the book data
import { useState } from "react"; // Importing useState hook from React
import FavoriteCard from "./FavoriteCard.jsx"; // Importing the FavoriteCard component

function ListBooks() {
  // State to manage the list of liked book IDs
  const [likesId, setLikesId] = useState([]);
  // State to manage the list of displayed books
  const [listBook, setListBook] = useState(bookData);
  // State to manage the search input value
  const [textValue, setTextValue] = useState("");

  // Handler to manage like/unlike functionality
  const likeHandler = (id) => {
    let newLikesId = [...likesId];
    const indexLike = newLikesId.indexOf(id);
    // Toggle like/unlike by adding or removing the book ID
    newLikesId.includes(id)
      ? newLikesId.splice(indexLike, 1)
      : (newLikesId = [...newLikesId, id]);
    setLikesId(newLikesId);
  };

  // Handler to update the search input value
  const textHandler = (event) => setTextValue(event.target.value);

  // Handler to filter the book list based on the search input
  const searchHandler = (event) => {
    event.preventDefault();
    // If search input is empty, display all books
    if (!textValue) {
      setListBook(bookData);
      return;
    }
    // Filter books by title based on search input
    const newListBook = bookData.filter((item) => {
      return item.title.toLowerCase().includes(textValue.toLowerCase());
    });
    setListBook(newListBook);
  };

  return (
    <div className="mt-4 w-full">
      {/* Search bar */}
      <div className="search flex gap-x-1">
        <form
          action=""
          className="flex w-full gap-x-1"
          onSubmit={searchHandler}
        >
          <input
            onChange={textHandler}
            placeholder="Search"
            type="text"
            name="text"
            id="text"
            value={textValue}
            className="block w-96 rounded-md border border-th1 bg-th4 px-2.5 text-sm text-th1 "
          />
          <button type="submit">
            <svg className="icon h-8 w-8 cursor-pointer rounded-lg bg-th2 p-2 text-th4">
              <use xlinkHref={`${icons}#search`}></use>
            </svg>
          </button>
        </form>
      </div>
      {/* Book list and favorites section */}
      <div className="bodyBook flex items-stretch justify-stretch gap-x-4 py-4">
        <div className="books grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {listBook.map((item) => {
            return (
              <BookCard
                likesId={likesId}
                item={item}
                key={item.id}
                likeHandler={likeHandler}
              />
            );
          })}
        </div>

        {/* Favorites section, displayed only if there are liked books */}
        {!!likesId.length && (
          <div className="favorites flex h-fit min-h-[10rem] w-3/12 min-w-44 flex-col gap-y-2 rounded-md bg-indigo-500 px-2 py-3 ">
            <h1 className="text-lg font-bold">Favorites</h1>
            {listBook
              .filter((item) => likesId.includes(item.id))
              .map((item) => (
                <FavoriteCard item={item} key={item.id} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListBooks; // Exporting the ListBooks component
