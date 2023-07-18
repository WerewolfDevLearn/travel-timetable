import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
// import usePHBState from '../../redux/selectors';

export function AppHeader() {
  // const state = usePHBState();
  // const userName = state.user.profile.name;

  return <header>{userName ? <UserMenu userPhoto={userPhoto} /> : <Navigation />}</header>;
}
