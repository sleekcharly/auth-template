'use server';

import { signOut } from '@/auth';

export const logout = async () => {
  // used when carrying out some server actions
  await signOut();
};
