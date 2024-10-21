interface TreatmentCardProps {
  image: string;
  title: string;
  contentOne?: string;
  contentTwo?: string;
}

export default function TreatmentCard({
  image,
  title,
  contentOne,
  contentTwo,
}: TreatmentCardProps) {
  return (
    <div className="flex gridItems flex-col items-center p-4 rounded-lg bg-white">
      <img
        src={image}
        alt={title}
        className="w-[150px] h-[150px] object-cover mb-4"
      />
      <h5 className="text-lg text-center font-semibold text-gray-800">
        {title}
      </h5>
      <h5 className="text-lg text-center font-medium text-gray-800">
        {contentOne}
      </h5>
      <h5 className="text-lg text-center font-medium text-gray-800">
        {contentTwo}
      </h5>
    </div>
  );
}
