import Header from './Header';
import { connect } from 'react-redux';
import { removeUser } from '../store/user/user.actions';

const HeaderContainer = connect(
  state => state,
  { removeUser }
)(Header);

export default HeaderContainer;
