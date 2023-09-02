import { IuserMenu } from '../../types';
export function UserMenu({ userPhoto }: IuserMenu) {
  return (
    <div>
      <img src={userPhoto} alt="user" />
    </div>
  );
}
