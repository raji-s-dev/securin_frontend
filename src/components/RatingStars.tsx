interface Props {
  rating: number | null;
}

const RatingStars = ({ rating }: Props) => {
  if (!rating) return <span className="text-gray-400">N/A</span>;

  const fullStars = Math.round(rating);

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= fullStars ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStars;