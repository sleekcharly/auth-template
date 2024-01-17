import { UserInfo } from '@/components/user-info';
import { currentUser } from '@/lib/auth';

type Props = {};

const Server = async (props: Props) => {
  const user = await currentUser();

  return <UserInfo user={user} label="💻 Server component" />;
};

export default Server;
