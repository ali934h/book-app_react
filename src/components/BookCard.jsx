// BookCard.jsx
// A React component that represents a single book card, displaying book details and handling the like/unlike functionality.

import icons from "../assets/imgs/icons/icons.svg"; // Importing SVG icons

function BookCard({
  item: { author, title, pages, publishDate, imgLink, id }, // Destructuring book item properties
  likeHandler, // Function to handle like/unlike
  likesId, // Array of liked book IDs
}) {
  return (
    <div className="flex gap-x-3 rounded-lg bg-th2 px-2 py-2">
      {/* Book cover image */}
      <div className="img">
        <img
          src={imgLink}
          alt={title}
          className="max-w-16 md:max-w-20 lg:max-w-24"
        />
      </div>
      {/* Book details */}
      <div className="info flex flex-col gap-y-4">
        <h1 className="text-lg">{title}</h1>
        <h3 className="text-base">{author}</h3>
        <div className="sub flex flex-col gap-3 text-xs text-th3">
          <span>{pages} pages</span>
          <span>Publish: {publishDate}</span>
        </div>
      </div>
      {/* Like button */}
      <div className="like ml-auto">
        <svg
          className="icon h-8 w-8 cursor-pointer rounded-md p-1"
          onClick={() => {
            likeHandler(id); // Calling the likeHandler function with the book ID
          }}
        >
          <use
            xlinkHref={`${icons}#Rheart`}
            className={likesId.includes(id) ? `text-red-700` : `text-white`} // Conditional styling based on like status
          ></use>
        </svg>
      </div>
    </div>
  );
}

export default BookCard; // Exporting the BookCard component
