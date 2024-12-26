import {itemTypes, sections} from './constants';

export const homeData = [
  {
    id: 1,
    title: 'Top Rated Movies',
    section: sections.TOPRATEDMOVIES,
    type: itemTypes.MOVIE,
  },
  {
    id: 2,
    title: 'Trending TV Shows This Week',
    section: sections.POPULARTV,
    type: itemTypes.TV,
  },
  {
    id: 3,
    title: 'Top Rated Tv Shows',
    section: sections.TOPRATEDTV,
    type: itemTypes.TV,
  },
  {
    id: 4,
    title: 'Trending Movies This Week',
    section: sections.POPULARMOVIES,
    type: itemTypes.MOVIE,
  },
];
