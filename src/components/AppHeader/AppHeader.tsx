import { Navigation } from '../Navigation/Navigation';
// import { UserMenu } from '../UserMenu/UserMenu';
// import usePHBState from '../../redux/selectors';

export function AppHeader() {
  // const state = usePHBState();
  // const userName = state.user.profile.name;
  // userName ? <UserMenu userPhoto={userPhoto} /> :
  return <header className="app-header">{<Navigation />}</header>;
}
