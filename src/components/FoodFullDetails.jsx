import FoodDetailsTextBox from "./FoodDetailsTextBox";
import HeaderText from "./HeaderText";
import Image from "./Image";
import TextBox from "./TextBox";

function FoodFullDetails() {
  return (
    <div className="bg-white my-4 mx-10 rounded-[5px] px-5">
      <HeaderText className="mt-18">Jollof Rice with Fried Chicken</HeaderText>
      <p className="text-primary-color text-[16px] leading-6 font-medium mt-3">
        #2,800
      </p>
      <p className="text-[16px] text-text-color leading-[-140%] mt-4">
        Our signature Jollof rice, cooked to perfection with aromatic spices,
        served with juicy, golden-fried chicken. A classic Nigerian comfort
        food, rich in flavor and satisfying. Perfect for a quick lunch or a
        hearty dinner.
      </p>
      <div className="flex items-center gap-8 mt-8 ml-4">
        <div className="flex items-center gap-2.25">
          <Image src="./images/clock.png" alt="clock" />
          <span className="text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%]">
            Mildly spicy
          </span>
        </div>
        <div className="flex items-center gap-2.25">
          <Image src="./images/clock.png" alt="clock" />
          <span className="text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%]">
            Vegetarian option available
          </span>
        </div>
        <div className="flex items-center gap-2.25">
          <Image src="./images/clock.png" alt="clock" />
          <span className="text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%]">
            View Allergies
          </span>
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
              <span className="text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%]">
                Fried Chicken
              </span>
            </div>
            <span className="text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%]">
              (Default)
            </span>
          </div>

          <div className="flex items-center justify-between border border-icon-text rounded-sm px-2.5 py-1.5 mt-4">
            <div className="flex items-center gap-2.25">
              <Image src="./images/circle.png" alt="clock" />
              <span className="text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%]">
                Grilled Fish
              </span>
            </div>
            <span className="text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%]">
              +#500
            </span>
          </div>

          <div className="flex items-center justify-between border border-icon-text rounded-sm px-2.5 py-1.5 mt-4">
            <div className="flex items-center gap-2.25">
              <Image src="./images/circle.png" alt="clock" />
              <FoodDetailsTextBox>Beef</FoodDetailsTextBox>
            </div>
            <span className="text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%]">
              +#700
            </span>
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
              <span className="text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%]">
                Fried Plantain
              </span>
            </div>
            <span className="text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%]">
              +#700
            </span>
          </div>

          <div className="flex items-center justify-between border border-icon-text rounded-sm px-2.5 py-1.5 mt-4">
            <div className="flex items-center gap-2.25">
              <span className="border border-icon-text w-8 h-8 rounded-xl px-2.5 py-1.5"></span>
              <span className="text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%]">
                Coleslaw
              </span>
            </div>
            <span className="text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%]">
              +#500
            </span>
          </div>

          <div className="flex items-center justify-between border border-icon-text rounded-sm px-2.5 py-1.5 mt-4">
            <div className="flex items-center gap-2.25">
              <span className="border border-icon-text w-8 h-8 rounded-xl px-2.5 py-1.5"></span>
              <span className="text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%]">
                Extra Pepper Sauce
              </span>
            </div>
            <span className="text-[16px] text-text-dark-grey leading-[-140%] tracking-[-2%]">
              +#300
            </span>
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
            className="text-text-color text-[16px] leading-[140%] border-0 outline-none w-full "
            placeholder="E.g no onion, food is too spicy, food is too hot hhhhhhhhhh food is tasty"
          />
        </div>
      </div>
    </div>
  );
}

export default FoodFullDetails;
