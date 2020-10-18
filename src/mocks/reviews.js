import {nanoid} from 'nanoid';
import {getRandomElements, getRandomInteger, generateDate, getRandomFloat} from "../utils";

const REVIEWS_FILM_CARD_COUNT = 9;
const MIN_REVIEW_SENTENCE = 1;
const MAX_REVIEW_SENTENCE = 4;
const MIN_REVIEW_RATING = 6;
const MAX_REVIEW_RATING = 10;

const generateAuthor = () => {
  const authors = [
    `Kate Muir`,
    `Matthew Lickona`,
    `Bill Goodykoontz`,
    `Paula Fleri-Soler`,
    `Amanda Greever`,
    `Cameron Owens`
  ];

  const randomIndex = getRandomInteger(0, authors.length - 1);

  return authors[randomIndex];
};

const generateText = () => {
  const text = [
    `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight.`,
    `It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ];

  const sentenceCount = getRandomInteger(MIN_REVIEW_SENTENCE, MAX_REVIEW_SENTENCE);

  return getRandomElements(text, sentenceCount).join(` `);
};

const generateReview = () => {
  const author = generateAuthor();

  return {
    id: nanoid(),
    author,
    rating: getRandomFloat(MIN_REVIEW_RATING, MAX_REVIEW_RATING),
    date: generateDate(),
    text: generateText()
  };
};

const reviews = new Array(REVIEWS_FILM_CARD_COUNT).fill().map(generateReview);

export default reviews;
