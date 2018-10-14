import React from 'react';
import Button from '@material-ui/core/Button/Button';

const LoginPage = ({ setUser }) => {
  return (
    <div>
      <Button onClick={() => setUser({ email: 'test@test.ch' })}>Login</Button>
    </div>
  );
};

export default LoginPage;
