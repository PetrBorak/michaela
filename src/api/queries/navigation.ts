export interface Data {
  navigation: {
    Navigation: {
      Link: {
        page: {
          id: number;
          path: string
        };
        Name: string
      }
    }
  }
}

export default `
query{
  navigation {
    Navigation {
            ... on ComponentNavigationNavigationMenuMainBlack {
      Link {
        page {
          ... on Page {
            id
            path
          }
        }
        Name
        }
      }
    }
  }
}
`
