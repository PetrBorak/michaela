export interface Data {
  homepage: {
    Name: string;
    Jumbotron: {
      Motto: string;
      Image: {
        url: string
      }
    }
  }
}


export default `
query {
  homepage {
    Name
    Jumbotron {
      Motto
      Image {
        url
      }
    }
  }
}`
