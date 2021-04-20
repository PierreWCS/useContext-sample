import { createContext, useMemo, useState } from 'react';

const INITIAL_USER_STATE = {
  id: null,
  email: null,
  firstname: null,
  lastname: null,
};

export const UserContext = createContext({ user: INITIAL_USER_STATE });

export const UserContextProvider = ({ children }) => {
  const [user, updateUser] = useState(INITIAL_USER_STATE);

  const value = useMemo(
    () => ({
      user,
      updateUser,
      INITIAL_USER_STATE,
    }),
    [user]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
