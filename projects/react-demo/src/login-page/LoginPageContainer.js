import { connect } from 'react-redux';
import { setUser } from '../store/user/user.actions';
import LoginPage from './LoginPage';

const LoginPageContainer = connect(
  null,
  { setUser }
)(LoginPage);

export default LoginPageContainer;
