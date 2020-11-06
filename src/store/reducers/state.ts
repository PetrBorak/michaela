import type { State as PageState } from './page/model';
import type { State as HomepageState } from './homepage/model';
import type { State as NavigationState } from './navigation/model';
import type { State as SubnavigationTop } from './navigation/model';

export interface State {
  page: PageState;
  homepage: HomepageState;
  navigation: NavigationState;
  subnavigationTop: SubnavigationTop;
}
