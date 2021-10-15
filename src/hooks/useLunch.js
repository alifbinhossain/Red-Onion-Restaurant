import img1 from "../Images/lunch/lunch1.png";
import img2 from "../Images/lunch/lunch2.png";
import img3 from "../Images/lunch/lunch3.png";
import img4 from "../Images/lunch/lunch4.png";
import img5 from "../Images/lunch/lunch5.png";
import img6 from "../Images/lunch/lunch6.png";

const useLunch = () => {
  const lunch = [
    {
      id: 1,
      name: "Bagel & Cream Cheese",
      img: img1,
      price: 17,
      description:
        "One of the best ways to describe food on your menu is by indicating how it was prepared. So long as your customer recognizes the words you choose, it will give them a clear picture of your food's flavor and appearance.",
    },

    {
      id: 2,
      name: "Breakfast Sandwich",
      img: img2,
      price: 9,
      description:
        "One of the best ways to describe food on your menu is by indicating how it was prepared. So long as your customer recognizes the words you choose, it will give them a clear picture of your food's flavor and appearance.",
    },
    {
      id: 3,
      name: "Baked Chicken",
      img: img3,
      price: 12,
      description:
        "One of the best ways to describe food on your menu is by indicating how it was prepared. So long as your customer recognizes the words you choose, it will give them a clear picture of your food's flavor and appearance.",
    },
    {
      id: 4,
      name: "Eggs Benedict",
      img: img4,
      price: 14,
      description:
        "One of the best ways to describe food on your menu is by indicating how it was prepared. So long as your customer recognizes the words you choose, it will give them a clear picture of your food's flavor and appearance.",
    },
    {
      id: 5,
      name: "Toast Croissant Friend Egg",
      img: img5,
      price: 26,
      description:
        "One of the best ways to describe food on your menu is by indicating how it was prepared. So long as your customer recognizes the words you choose, it will give them a clear picture of your food's flavor and appearance.",
    },
    {
      id: 6,
      name: "Full Breakfast with Egg Toast Brunch",
      img: img6,
      price: 18,
      description:
        "One of the best ways to describe food on your menu is by indicating how it was prepared. So long as your customer recognizes the words you choose, it will give them a clear picture of your food's flavor and appearance.",
    },
  ];

  return lunch;
};

export default useLunch;
