import Image from "./Image";

function PopularCatMeal({ meals }) {
  return (
    <div className="grid grid-cols-3 gap-12 w-fit">
      {meals.map((meal) => (
        <div key={meal.id} className="shadow-sm object-cover rounded-b-4xl">
          <Image src={meal.image} alt={meal.title} />
          <p className="bg-white text-text-color text-2xl font-semibold leading-8.5 text-center py-14">
            {meal.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PopularCatMeal;
