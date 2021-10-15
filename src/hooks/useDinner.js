import img1 from "../Images/Dinner/dinner1.png";
import img2 from "../Images/Dinner/dinner2.png";
import img3 from "../Images/Dinner/dinner3.png";
import img4 from "../Images/Dinner/dinner4.png";
import img5 from "../Images/Dinner/dinner5.png";
import img6 from "../Images/Dinner/dinner6.png";

const useDinner = () => {
  const lunch = [
    {
      id: 1,
      name: "Salmon with Grape Fruit",
      img: img1,
      price: 25,
      description:
        "One of the best ways to describe food on your menu is by indicating how it was prepared. So long as your customer recognizes the words you choose, it will give them a clear picture of your food's flavor and appearance.",
    },

    {
      id: 2,
      name: "Lemony Salmon Piccata",
      img: img2,
      price: 19,
      description:
        "One of the best ways to describe food on your menu is by indicating how it was prepared. So long as your customer recognizes the words you choose, it will give them a clear picture of your food's flavor and appearance.",
    },
    {
      id: 3,
      name: "Pork Tenderloin With Quinoa Pilaf",
      img: img3,
      price: 29,
      description:
        "One of the best ways to describe food on your menu is by indicating how it was prepared. So long as your customer recognizes the words you choose, it will give them a clear picture of your food's flavor and appearance.",
    },
    {
      id: 4,
      name: "French Fries with Cheese",
      img: img4,
      price: 17,
      description:
        "One of the best ways to describe food on your menu is by indicating how it was prepared. So long as your customer recognizes the words you choose, it will give them a clear picture of your food's flavor and appearance.",
    },
    {
      id: 5,
      name: "Garlic Butter Baked Salmon",
      img: img5,
      price: 32,
      description:
        "One of the best ways to describe food on your menu is by indicating how it was prepared. So long as your customer recognizes the words you choose, it will give them a clear picture of your food's flavor and appearance.",
    },
    {
      id: 6,
      name: "Baked Chicken",
      img: img6,
      price: 27,
      description:
        "One of the best ways to describe food on your menu is by indicating how it was prepared. So long as your customer recognizes the words you choose, it will give them a clear picture of your food's flavor and appearance.",
    },
  ];

  return lunch;
};

export default useDinner;
