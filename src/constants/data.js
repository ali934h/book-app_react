const BASE_URL = "/assets/imgs/books/";
const imgUrl = (name) => BASE_URL.concat(name).concat(".jpg");

const data = [
  {
    id: "01",
    author: "Liz Cheney",
    title: "Oath and Honor",
    pages: "384",
    publishDate: "December 5, 2023",
    imgLink: imgUrl("Oath_and_Honor"),
  },
  {
    id: "02",
    author: "Snoop Dogg",
    title: "From Crook to Cook",
    pages: "192",
    publishDate: "October 23, 2018",

    imgLink: imgUrl("From_Crook_to_Cook"),
  },
  {
    id: "03",
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    pages: "198",
    publishDate: "July 18, 2022",
    imgLink: imgUrl("Interesting_Facts_For_Curious_Minds"),
  },
  {
    id: "04",
    author: "Michio Kaku",
    title: "Quantum Supremacy",
    pages: "352",
    publishDate: "May 2, 2023",
    imgLink: imgUrl("Quantum_Supremacy"),
  },
  {
    id: "05",
    author: "Wendy Loggia",
    title: "Taylor Swift",
    pages: "24",
    publishDate: "May 2, 2023",
    imgLink: imgUrl("Taylor_Swift"),
  },
  {
    id: "06",
    author: "James Clear",
    title: "Atomic Habits",
    pages: "320",
    publishDate: "October 16, 2018",
    imgLink: imgUrl("Atomic_Habits"),
  },
  {
    id: "07",
    author: "James McBride",
    title: "The Heaven & Earth Grocery Store",
    pages: "400",
    publishDate: "August 8, 2023",
    imgLink: imgUrl("The_Heaven_&_Earth_Grocery_Store"),
  },
  {
    id: "08",
    author: "Bonnie Garmus",
    title: "Lessons in Chemistry",
    pages: "400",
    publishDate: "April 5, 2022",
    imgLink: imgUrl("Lessons_in_Chemistry"),
  },
  {
    id: "09",
    author: "Sophia Elizabeth",
    title: "How To Draw 101 Things For Kids",
    pages: "109",
    publishDate: "October 11, 2021",
    imgLink: imgUrl("How_To_Draw_101_Things_For_Kids"),
  },
  {
    id: "10",
    author: "Erin Guendelsberger",
    title: "Little Red Sleigh",
    pages: "40",
    publishDate: "October 6, 2020",
    imgLink: imgUrl("Little_Red_Sleigh"),
  },
  {
    id: "11",
    author: "David Grann",
    title: "The Wager",
    pages: "352",
    publishDate: "April 18, 2023",
    imgLink: imgUrl("The_Wager"),
  },
  {
    id: "12",
    author: "Jack Hibbs",
    title: "Living in the Daze of Deception",
    pages: "224",
    publishDate: "February 6, 2024",
    imgLink: imgUrl("Living_in_the_Daze_of_Deception"),
  },
  {
    id: "13",
    author: "Geddy Lee",
    title: "My Effin Life",
    pages: "512",
    publishDate: "November 14, 2023",
    imgLink: imgUrl("My_Effin_Life"),
  },
  {
    id: "14",
    author: "David Grann",
    title: "Killers of the Flower Moon",
    pages: "416",
    publishDate: "April 3, 2018",
    imgLink: imgUrl("Killers_of_the_Flower_Moon"),
  },
  {
    id: "15",
    author: "Rachel Maddow",
    title: "Prequel",
    pages: "416",
    publishDate: "October 17, 2023",
    imgLink: imgUrl("Prequel"),
  },
  {
    id: "16",
    author: "Hannah Grace",
    title: "Icebreaker",
    pages: "448",
    publishDate: "February 7, 2023",
    imgLink: imgUrl("Icebreaker"),
  },
  {
    id: "17",
    author: "Sarah J. Maas",
    title: "A Court of Thorns and Roses",
    pages: "448",
    publishDate: "June 2, 2020",
    imgLink: imgUrl("A_Court_of_Thorns_and_Roses"),
  },
  {
    id: "18",
    author: "Dr. David Jeremiah",
    title: "The Great Disappearance",
    pages: "320",
    publishDate: "October 3, 2023",
    imgLink: imgUrl("The_Great_Disappearance"),
  },
  {
    id: "19",
    author: "Matthew Perry",
    title: "Friends, Lovers, and the Big Terrible Thing",
    pages: "272",
    publishDate: "November 1, 2022",
    imgLink: imgUrl("Friends_Lovers_and_the_Big_Terrible_Thing"),
  },
  {
    id: "20",
    author: "Christopher Paolini",
    title: "Murtagh",
    pages: "704",
    publishDate: "November 7, 2023",
    imgLink: imgUrl("Murtagh"),
  },
];

export default data;
