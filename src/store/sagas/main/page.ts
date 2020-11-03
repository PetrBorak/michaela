import { Api } from '../../../api/types'

export function* page(api: Api): any {
  console.log('sample saga working')
  const response = yield api.getPage("1");
  console.log('sample saga fetched')
}
