import WrapperLayout from 'components/WrapperLayout/WrapperLayout.js';
import React from 'react';
import styled from 'styled-components';
import { listItems, contactItems } from './footerData.js';

function Footer() {
  return (
    <FooterDiv>
      <ShortcutDiv>
        <WrapperLayout>
          <div className="shortcutAccordinList">
            <AccordinListUl>
              {listItems.map(item => (
                <AccordinListTitleGroupLi key={item.id}>
                  <SubTitle>{item.title}</SubTitle>
                  {item.subListItems.map(subItem => (
                    <SubListItems key={subItem.id}>
                      <SubListLetters>{subItem.itemName}</SubListLetters>
                    </SubListItems>
                  ))}
                </AccordinListTitleGroupLi>
              ))}
              <Logo alt="logo" src="/images/logo.png" />
            </AccordinListUl>
          </div>
        </WrapperLayout>
      </ShortcutDiv>
      <Contact>
        <WrapperLayout>
          <ContactItemDiv>
            <ContactTitle>(주) 에어플라이어</ContactTitle>
          </ContactItemDiv>
          <ContactList>
            {contactItems.map(contactItem => (
              <ContactItem key={contactItem.key}>
                {contactItem.info}
              </ContactItem>
            ))}
          </ContactList>
        </WrapperLayout>
        <CopyRight>© 2022-2023 AIR FLYER</CopyRight>
      </Contact>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  position: fixed;
  margin: 0 auto;
  bottom: 0;
  box-sizing: border-box;
`;
const AccordinListUl = styled.ul`
  display: flex;
  width: 100%;
`;

const ShortcutDiv = styled.div`
  width: 1450px;
  height: 260px;
  max-width: 100%;
  color: black;
  background-color: #f3f4f8;
  background-position: 0% 0%;
  border-top: 1px solid #d8dbe0;
  line-height: 24px;
  z-index: 9999;
`;

const AccordinListTitleGroupLi = styled.li`
  /* display: list-item; */
  width: 234px;
  height: 192px;
  padding: 40px 10px 0 0;
  color: #000000;
  background-color: #f3f4f8;
`;

const SubTitle = styled.h6`
  display: block;
  width: 225px;
  height: 24px;
  margin: 0 0 11px 0;
  color: #000000;
  background-color: #f3f4f8;
  font-size: 16px;
  font-weight: 700;
`;

const SubListItems = styled.li`
  /* background-position: 0% 0%; */
  color: #000000;
  background-color: #f3f4f8;
`;
const SubListLetters = styled.p`
  display: inline-block;
  font-size: 14px;
  height: 22px;
  width: 100%;
  margin: 2px 0 2px 0;
`;

const Logo = styled.img`
  position: absolute;
  top: 10px;
  left: 1010px;
  width: 300px;
  height: 250px;
`;

const Contact = styled.div`
  width: 1425px;
  height: 116px;
  padding: 20px;
  background-color: #ffffff;
  font-size: 16px;
`;

const ContactTitle = styled.strong`
  width: 200px;
  height: auto;
  margin: 0 20px 0 0;
  background-color: white;
  text-decoration: none solid rgb(0, 37, 108);
  font-weight: 700;
`;

const ContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ContactItem = styled.li`
  height: 22px;
  margin: 0 5px;
  font-size: 14px;
  text-align: left;
  line-height: 22px;
`;

const ContactItemDiv = styled.div`
  float: left;
  display: block;
  height: 22px;
  line-height: 22px;
`;

const CopyRight = styled.p`
  width: 1280px;
  height: 22px;
  max-width: 1280px;
  padding-top: 10px;
  padding-left: 93px;
  color: #555555;
  line-height: 22px;
  text-decoration: none solid rgb(85, 85, 85);
`;

export default Footer;
