import { fetchGql } from "simple-gql";

import {ENDPOINT_CONFIG_GRAPHQL} from '../config/api'

//types
import { SubnavigationTopData, NavigationData, HomepageData } from "../api/queries";

// queries
import { Homepage, Navigation, SubNavigatoinTop } from '../api/queries';

export const api = {
  getSubnavigationTop(){
    return(
      fetchGql<SubnavigationTopData, null>({
      url: ENDPOINT_CONFIG_GRAPHQL,
      query: SubNavigatoinTop,
    }))
  },
  getHomepage(){
    return(
      fetchGql<HomepageData, null>({
      url: ENDPOINT_CONFIG_GRAPHQL,
      query: Homepage,
    }))
  },
  getNavigation(){
    return (
      fetchGql<NavigationData, null>({
        url: ENDPOINT_CONFIG_GRAPHQL,
        query: Navigation,
      }))
  }
}
