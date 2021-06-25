export type Endpoint = 'pokemon';

export type QueryResponse = {
  count: number;
  next: string;
  previous: string;
  results: QueryResult[];
}

export type QueryResult = {
  name: string;
  url: string;
};

export type Pokemon = {

};
