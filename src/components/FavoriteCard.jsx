// FavoriteCard.jsx
function FavoriteCard({ item: { title, imgLink } }) {
  return (
    <div className="flex items-start justify-between gap-x-1 rounded-md bg-indigo-400 px-2 py-2">
      <img src={imgLink} alt={title} className="hidden w-16 lg:block" />
      <span className="w-full py-1 text-sm">{title}</span>
    </div>
  );
}
export default FavoriteCard;
