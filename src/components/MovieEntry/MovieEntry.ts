export interface Movie {
  title: string;
  description: string;
}

const MovieStream = (): Movie => {
  return {
    title: 'Wolf Creek',
    description: 'Lorem ipsum dolor sit amet',
  };
};

export default MovieStream;
