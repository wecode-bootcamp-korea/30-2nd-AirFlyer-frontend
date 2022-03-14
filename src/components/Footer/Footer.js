import WrapperLayout from 'components/WrapperLayout/WrapperLayout.js';
import React from 'react';
import styled from 'styled-components';
import { listItems, contactItems } from './footerData.js';

function Footer() {
  return (
    <FooterDiv>
      <WrapperLayout>
        <ShortcutDiv>
          <div className="shortcutAccordinList">
            <AccordinListUl className="subAccordinList">
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
              <AccordinListTitleGroupLi>
                <Logo alt="logo" src="/images/logo_black.png" />
              </AccordinListTitleGroupLi>
            </AccordinListUl>
          </div>
        </ShortcutDiv>
      </WrapperLayout>
      <Contact>
        <WrapperLayout>
          <ContactItemDiv>
            <ContactTitle>(주) 에어플라이어</ContactTitle>
          </ContactItemDiv>
          <ContactList className="contact_list">
            {contactItems.map(contactItem => (
              <ContactItem>{contactItem.info}</ContactItem>
            ))}
          </ContactList>
          <CopyRight>© 2022-2023 AIR FLYER</CopyRight>
        </WrapperLayout>
      </Contact>
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  position: fixed;
  bottom: 0;
  box-sizing: border-box;
`;

const AccordinListUl = styled.ul`
  display: flex;
  width: 100%;
  background-color: #f3f4f8;
`;

const ShortcutDiv = styled.div`
  font-size: 16px;
  line-height: 24px;
  width: 1450px;
  height: 260px;
  color: black;
  background-position: 0% 0%;
  border-top: 1px solid #d8dbe0;
  max-width: 100%;
  display: block;
  z-index: 9999;
`;

const AccordinListTitleGroupLi = styled.li`
  font-size: 16px;
  background-color: #f3f4f8;
  color: #000000;
  height: 192px;
  width: 234px;
  padding: 40px 10px 0 0;
  min-height: auto;
  min-width: auto;
  display: list-item;
`;

const SubTitle = styled.h6`
  font-size: 16px;
  font-weight: 700;
  background-color: #f3f4f8;
  color: #000000;
  height: 24px;
  width: 225px;
  margin: 0 0 11px 0;
  display: block;
`;

const SubListItems = styled.li`
  font-size: 16px;
  background-color: #f3f4f8;
  background-position: 0% 0%;
  color: #000000;
`;
const SubListLetters = styled.p`
  font-size: 14px;
  height: 22px;
  width: 100%;
  margin: 2px 0 2px 0;
  display: inline-block;
`;

const Logo = styled.img`
  position: absolute;
  top: 10px;
  left: 1010px;
  height: 250px;
  width: 300px;
`;

const Contact = styled.div`
  font-size: 16px;
  background-color: #ffffff;
  height: 116px;
  width: 1425px;
  padding: 20px;
`;

const ContactTitle = styled.strong`
  font-size: 14px;
  font-weight: 700;
  text-decoration: none solid rgb(0, 37, 108);
  background-color: white;
  width: 200px;
  height: auto;
  margin: 0 20px 0 0;
`;

const ContactList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ContactItem = styled.li`
  font-size: 14px;
  line-height: 22px;
  text-align: left;
  height: 22px;
  margin: 0 5px;
`;

const ContactItemDiv = styled.div`
  font-size: 14px;
  line-height: 22px;
  height: 22px;
  float: left;
  display: block;
`;

const CopyRight = styled.p`
  font-size: 14px;
  line-height: 22px;
  text-decoration: none solid rgb(85, 85, 85);
  color: #555555;
  height: 22px;
  width: 1280px;
  max-width: 1280px;
  padding-left: 93px;
  padding-top: 10px;
`;

export default Footer;
