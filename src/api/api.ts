import { fetchGql } from "simple-gql";

//types
import { PageData, PageQueryVariables } from "../api/queries";

// queries
import { Page } from '../api/queries';

export const api = {
  getPage(id: string){
    return (
      fetchGql<PageData, PageQueryVariables>({
        url: 'http://localhost:1337/graphql',
        query: Page,
        variables: { id },
      }))
  }
}
