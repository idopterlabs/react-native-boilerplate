import React from 'react';

import { AuthContextProvider } from './AuthContext';

export default ({ children }: any) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};
