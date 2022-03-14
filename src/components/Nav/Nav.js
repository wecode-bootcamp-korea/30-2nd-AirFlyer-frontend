import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import WrapperLayout from 'components/WrapperLayout/WrapperLayout';
import { NAV_LIST } from './navdata';

function Nav() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
  };

  const goToCart = () => {
    navigate('/users/cart');
  };

  const token = localStorage.getItem('token');

  return (
    <NavBar>
      <WrapperLayout>
        <NavBarWrapper>
          <LogoLink to="/">
            <Logo alt="logo" src="/images/logo.png" />
          </LogoLink>
          <MenuList>
            {NAV_LIST.menuLinks.map(menu => (
              <li key={menu.id}>
                <MenuLink to={menu.to}>{menu.name}</MenuLink>
              </li>
            ))}
          </MenuList>
          <UtilList>
            <li>
              {!token ? (
                <LoginLink to="/login">로그인</LoginLink>
              ) : (
                <LoginLink to="/" onClick={logout}>
                  로그아웃
                </LoginLink>
              )}
            </li>
            {NAV_LIST.iconLinks.map(item => (
              <li key={item.id}>
                {item.name === 'cart' ? (
                  <Icon
                    width={25}
                    height={25}
                    src={item.src}
                    onClick={goToCart}
                  />
                ) : (
                  <Icon width={25} height={25} src={item.src} />
                )}
              </li>
            ))}
          </UtilList>
        </NavBarWrapper>
      </WrapperLayout>
    </NavBar>
  );
}

const NavBar = styled.nav`
  width: 100%;
  padding: 27px 0 25px;
  border-bottom: 1px solid ${props => props.theme.borderColorGray};
`;

const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
`;

const Logo = styled.img`
  height: 30px;
  cursor: pointer;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 700;
`;

const MenuLink = styled(NavLink)`
  margin: 0 30px;
  color: ${props => props.theme.fontColorBlack};
  text-decoration: none;

  &[aria-current='page'] {
    color: ${props => props.theme.fontColorDarkblue};
    text-decoration: underline;
  }
`;

const UtilList = styled.ul`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;

  li {
    margin: 0 15px;
  }
`;

const LoginLink = styled(Link)`
  color: ${props => props.theme.fontColorDarkblue};
  text-decoration: none;
`;

const Icon = styled.button`
  width: ${props => props.width}px;
  height: ${props => props.width}px;
  border: none;
  background-color: white;
  background: url(${props => props.src}) center center /
    ${props => props.width}px ${props => props.height}px;
  cursor: pointer;
`;

export default Nav;
