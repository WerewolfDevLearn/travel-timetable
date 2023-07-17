import { IuserMenu } from '../../types';
function UserMenu({ userPhoto }: IuserMenu) {
  return (
    <div>
      <img src={userPhoto} alt='user' />
    </div>
  );
}
export default UserMenu;
