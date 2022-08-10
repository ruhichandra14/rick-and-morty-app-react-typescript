import { gql } from "graphql-request";

export const CHARACTER_DETAIL_QUERY = (characterId: number) => gql`
{
  character(id: ${characterId}) {
    name
    image
    status
    species
    origin {
      name
      type
    }
    location {
      name
      type
    }
    episode {
      id
      name
      air_date
      episode
    }
  }
}
`;

export const CHARACTERSLIST_QUERY = (currentPage: number) => gql`
query getCharacters {
  characters (page: ${currentPage}){
  info{
  next
  prev
  }
    results {
      id
      name
      image
      status
      species
      origin {
        name
        type
      }
      location {
        name
        type
      }
    }
  }
}
`;
