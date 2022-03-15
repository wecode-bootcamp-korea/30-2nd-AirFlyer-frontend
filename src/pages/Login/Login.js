import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    window.alert('로그인 되었습니다.');
    navigate('/');
  };

  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      scope: 'profile_nickname, account_email',
      success: function (authObj) {
        window.Kakao.API.request({
          url: '/v2/user/me',
        });
        fetch('http://10.58.6.177:8000/users/signin', {
          method: 'POST',
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then(res => res.json())
          .then(res => goToMain());
      },
    });
  };

  const kakaoLogout = () => {
    window.Kakao.API.request({
      url: '/v1/user/unlink',
      success: function (res) {
        alert('success: ' + JSON.stringify(res));
      },
      fail: function (err) {
        alert('fail: ' + JSON.stringify(err));
      },
    });
  };

  return (
    <Article>
      <LoginBox>
        <Form>
          <Container>
            <Header>로그인</Header>
            <InputBox>
              <IdText>
                회원 아이디/스카이패스 회원번호
                <Required>필수 입력</Required>
              </IdText>
              <IdInput type="text" />
              <PwText>
                비밀번호
                <Required>필수 입력</Required>
              </PwText>
              <PwInput type="password" />
            </InputBox>
            <BtnBox>
              <LoginBtn>로그인</LoginBtn>
              <SnsText>
                <SnsTitle>SNS 로그인</SnsTitle>
              </SnsText>
              <SocialLoginBtn as="a" type="button" onClick={kakaoLogin}>
                <i className="fa-solid fa-comment" />
                <Img src="/images/kakao_login_large_wide.png" />
              </SocialLoginBtn>
              <LogoutBtn onClick={kakaoLogout}>카카오 로그아웃</LogoutBtn>
            </BtnBox>
          </Container>
        </Form>
      </LoginBox>
    </Article>
  );
};

const Article = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c1dcf9;
  height: 100vh;
  margin-top: 89px;
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1250px;
  height: 650px;
  margin: 0 600px 0 600px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 530px;
  height: 100%;
  box-shadow: 4px 10px 20px 0 lightgray;
  background-color: white;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 60px 40px 60px;
`;

const Header = styled.h1`
  margin-bottom: 26px;
  font-size: 28px;
  font-weight: 500;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const IdText = styled.label`
  padding-top: 10px;
  margin-bottom: 10px;
  color: gray;
`;

const Required = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-indent: 100%;
  position: relative;
  width: 5px;
  font-size: inherit;
  vertical-align: bottom;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #de001b;
  }
`;

const IdInput = styled.input`
  width: 410px;
  height: 50px;
  border: 0;
  border-bottom: 1px solid #00256c;

  &:hover {
    border: rgb(87, 124, 192) 1px solid;
    border-radius: 2px;
  }
`;

const PwText = styled.label`
  margin-top: 30px;
  margin-bottom: 10px;
  padding-top: 10px;
  color: gray;
`;

const PwInput = styled(IdInput)``;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SnsText = styled.h3`
  position: relative;
  margin-top: 10px;
  font-weight: 200;
  text-align: center;
  color: #555;

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #d9dbe1;
  }
`;

const SnsTitle = styled.span`
  display: inline-block;
  position: relative;
  margin: 0 10px;
  padding: 0 17px;
  background: #fff;
  font-weight: 600;
`;

const LoginBtn = styled.button`
  width: 410px;
  height: 60px;
  border: 1.5px solid #fff;
  border-radius: 15px;
  margin: 30px 0 20px 0;
  padding: 2px;
  cursor: pointer;
  background-color: #00256c;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  :hover {
    border: rgb(82, 167, 182) 1.5px solid;
    border-radius: 2px;
  }
`;

const SocialLoginBtn = styled.button`
  width: 410px;
  height: 60px;
  border: 1.5px solid #fff;
  border-radius: 15px;
  margin: 30px 0 20px 0;
  padding: 2px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 405px;
  height: 60px;
`;

const LogoutBtn = styled(LoginBtn)`
  background-color: #fee500;
  color: black;
  font-size: 20px;
  font-weight: 400;
`;

export default Login;
