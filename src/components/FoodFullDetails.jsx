import FoodDetailsTextBox from "./FoodDetailsTextBox";
import HeaderText from "./HeaderText";
import Image from "./Image";
import TextBox from "./TextBox";

function FoodFullDetails() {
  return (
    <>
      <div className="bg-white my-4 mx-10 rounded-[5px] px-5 max-[1000px]:mx-5 max-[700px]:mx-0 max-[700px]:my-0 max-[700px]:pb-5">
        <HeaderText className="mt-18 max-[700px]:mt-10 max-[500px]:text-2xl leading-8">
          Jollof Rice with Fried Chicken
        </HeaderText>
        <p className="text-primary-color text-2xl leading-6 font-medium mt-3">
          #2,800
        </p>
        <p className="text-[16px] text-text-color leading-[-140%] mt-4">
          Our signature Jollof rice, cooked to perfection with aromatic spices,
          served with juicy, golden-fried chicken. A classic Nigerian comfort
          food, rich in flavor and satisfying. Perfect for a quick lunch or a
          hearty dinner.
        </p>
        <div className="flex items-center justify-center gap-8 mt-8 ml-4 max-[1000px]:grid max-[1000px]:grid-cols-2 max-[1000px]:gap-4 max-[700px]:ml-0 max-[700px]:mt-4">
          <div className="flex items-center gap-2.25 max-[700px]:bg-soft-gray max-[700px]:py-1 max-[700px]:px-3 max-[700px]:rounded-lg w-40">
            <Image src="./images/clock.png" alt="clock" />
            <FoodDetailsTextBox>Mildly spicy</FoodDetailsTextBox>
          </div>
          <div className="flex items-center gap-2.25 max-[700px]:bg-soft-gray max-[700px]:py-1 max-[700px]:px-3 max-[700px]:rounded-lg w-full">
            <Image src="./images/clock.png" alt="clock" />
            <FoodDetailsTextBox>Vegetarian option available</FoodDetailsTextBox>
          </div>
          <div className="flex items-center gap-2.25 max-[700px]:bg-soft-gray max-[700px]:py-1 max-[700px]:px-3 max-[700px]:rounded-lg w-40">
            <Image src="./images/clock.png" alt="clock" />
            <FoodDetailsTextBox>View Allergies</FoodDetailsTextBox>
          </div>
        </div>
        <div className="mt-6">
          <TextBox className="text-2xl text-text-color leading-8.5 font-medium">
            Choose Your Protein
          </TextBox>
          <div className="mt-4">
            <div className="flex items-center justify-between border border-icon-text rounded-sm px-2.5 py-1.5">
              <div className="flex items-center gap-2.25">
                <Image src="./images/circle.png" alt="clock" />
                <FoodDetailsTextBox>Fried Chicken</FoodDetailsTextBox>
              </div>
              <FoodDetailsTextBox>(Default)</FoodDetailsTextBox>
            </div>

            <div className="flex items-center justify-between border border-icon-text rounded-sm px-2.5 py-1.5 mt-4">
              <div className="flex items-center gap-2.25">
                <Image src="./images/circle.png" alt="clock" />
                <FoodDetailsTextBox>Grilled Fish</FoodDetailsTextBox>
              </div>
              <FoodDetailsTextBox>+#500</FoodDetailsTextBox>
            </div>

            <div className="flex items-center justify-between border border-icon-text rounded-sm px-2.5 py-1.5 mt-4">
              <div className="flex items-center gap-2.25">
                <Image src="./images/circle.png" alt="clock" />
                <FoodDetailsTextBox>Beef</FoodDetailsTextBox>
              </div>
              <FoodDetailsTextBox>+#700</FoodDetailsTextBox>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <TextBox className="text-2xl text-text-color leading-8.5 font-medium">
            Extra Sides (Optional)
          </TextBox>
          <div className="mt-4">
            <div className="flex items-center justify-between border border-icon-text rounded-sm px-2.5 py-1.5">
              <div className="flex items-center gap-2.25">
                <span className="border border-icon-text w-8 h-8 rounded-xl px-2.5 py-1.5"></span>
                <FoodDetailsTextBox>Fried Plantain</FoodDetailsTextBox>
              </div>
              <FoodDetailsTextBox>+#700</FoodDetailsTextBox>
            </div>

            <div className="flex items-center justify-between border border-icon-text rounded-sm px-2.5 py-1.5 mt-4">
              <div className="flex items-center gap-2.25">
                <span className="border border-icon-text w-8 h-8 rounded-xl px-2.5 py-1.5"></span>
                <FoodDetailsTextBox>Coleslaw</FoodDetailsTextBox>
              </div>
              <FoodDetailsTextBox>+#500</FoodDetailsTextBox>
            </div>

            <div className="flex items-center justify-between border border-icon-text rounded-sm px-2.5 py-1.5 mt-4">
              <div className="flex items-center gap-2.25">
                <span className="border border-icon-text w-8 h-8 rounded-xl px-2.5 py-1.5"></span>
                <FoodDetailsTextBox>Extra Pepper Sauce</FoodDetailsTextBox>
              </div>
              <FoodDetailsTextBox>+#300</FoodDetailsTextBox>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <TextBox className="text-2xl text-text-color leading-8.5 font-medium">
            Special Instructions
          </TextBox>
          <div className="mt-4 border border-text-dark-grey/50 py-2 pl-4 rounded-lg h-35">
            <input
              type="text"
              className="text-text-color text-[16px] leading-[140%] border-0 outline-none w-full placeholder:text-black "
              placeholder={`E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodFullDetails;
