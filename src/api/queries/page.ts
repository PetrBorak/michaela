export interface QueryVariables {
  id: string
}

export interface Data {
  Page: {
    id: string
  }
}

export default `
  query getPage($id: ID!) {
    page(id: $id) {
      id,
      mainImage {
        url
      }
    }
  }`

