const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="border border-black p-4 space-y-4 rounded-lg">
      <div>
        <img className="w-full" src={imageSrc} alt="Img" />
      </div>
      <div className="space-y-2">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
