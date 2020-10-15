import {nanoid} from 'nanoid';
import {getRandomElement, getRandomElements, getRandomInteger} from "../utils/utils";

const FILMS_CARD_COUNT = 20;
const FILM_MIN_RELEASE_YEAR = 2000;
const FILM_MAX_RELEASE_YEAR = 2020;

const generateName = () => {
  const names = [
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`,
    `We need to talk about Kevin`,
    `What We Do in the Shadows`,
    `Revenant`,
    `Johnny English`,
    `Shutter Island`,
    `Pulp Fiction`,
    `No Country for Old Men`,
    `Snatch`,
    `Moonrise Kingdom`,
    `Seven Years in Tibet`,
    `Midnight Special`,
    `War of the Worlds`,
    `Dardjeeling Limited`,
    `Orlando`,
    `Mindhunter`,
    `Midnight Special`
  ];

  return getRandomElement(names);
};

const generatePoster = () => {
  const pathToPosterFolder = `./img/`;
  const posters = [
    `aviator.jpg`,
    `bg-the-grand-budapest-hotel.jpg`,
    `bohemian-rhapsody.jpg`,
    `dardjeeling-limited.jpg`,
    `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    `johnny-english.jpg`,
    `macbeth.jpg`,
    `midnight-special.jpg`,
    `moonrise-kingdom.jpg`,
    `no-country-for-old-men.jpg`,
    `orlando.jpg`,
    `player-poster.jpg`,
    `pulp-fiction.jpg`,
    `revenant.jpg`,
    `seven-years-in-tibet.jpg`,
    `shutter-island.jpg`,
    `snatch.jpg`,
    `the-grand-budapest-hotel-poster.jpg`,
    `war-of-the-worlds.jpg`,
    `we-need-to-talk-about-kevin.jpg`,
    `what-we-do-in-the-shadows.jpg`,
  ];

  const randomIndex = getRandomInteger(0, posters.length - 1);

  return `${pathToPosterFolder}${posters[randomIndex]}`;
};

const generateGenre = () => {
  const genres = [
    `Comedy`,
    `Drama`,
    `Musical`,
    `Western`,
    `Film-Noir`,
    `Mystery`
  ];

  const genresCount = getRandomInteger(1, genres.length - 1);

  return getRandomElements(genres, genresCount);
};

const generateVideo = () => {
  const video = [
    `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  ];

  const randomIndex = getRandomInteger(0, video.length - 1);

  return video[randomIndex];
};


const generateFilm = () => {
  const title = generateName();

  return {
    id: nanoid(),
    title,
    genre: generateGenre(),
    poster: generatePoster(),
    video: generateVideo(),
    background: `./img/bg-the-grand-budapest-hotel.jpg`,
    year: getRandomInteger(FILM_MIN_RELEASE_YEAR, FILM_MAX_RELEASE_YEAR)
  };
};

const films = new Array(FILMS_CARD_COUNT).fill().map(generateFilm);

export default films;
