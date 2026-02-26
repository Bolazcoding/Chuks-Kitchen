import Image from "./Image";

function PopularCatMeal({ meals }) {
  return (
    <div className="grid grid-cols-3 gap-12 w-full mt-12 max-[950px]:grid-cols-2 max-[950px]:justify-between max-[600px]:grid-cols-1">
      {meals.map((meal) => (
        <div
          key={meal.id}
          className="bg-white shadow-sm object-cover rounded-2xl"
        >
          <Image
            src={meal.image}
            alt={meal.title}
            className="max-[600px]:w-full"
          />
          <h3 className="text-text-color text-2xl font-semibold leading-8.5 text-center py-14">
            {meal.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default PopularCatMeal;
