export interface Data {
  subnavigationTop: {
    Link: {
      Name: string,
      page: {
        path: string
      }
    }
  }
}

export default `
{
  subnavigationTop {
      Link {
        Name,
        page {
          path
        }
      }

  }
}`
