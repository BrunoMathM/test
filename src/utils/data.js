import cake from "../../public/cake.png";

export const data = [
  {
    title: "Grand Italiano",
    description: "26 Item",
    image: cake,
  },
  {
    title: "Pene Salmone ",
    description: "23 Item",
    image: cake,
  },
  {
    title: "Molto Tagliatelle ",
    description: "20 Item",
    image: cake,
  },
  {
    title: "Pepperoni tagli",
    description: "26 Item",
    image: cake,
  },
  {
    title: "Grand Italiano",
    description: "26 Item",
    image: cake,
  },
];

export const sliderSettings = {
  arrows: false,
  slidesToShow: 3,
  focusOnselect: false,
  accessability: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
      },
    },

    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
