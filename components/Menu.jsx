import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4%;
  @media screen and (max-width: 767px)  {
    flex-direction: column;
  }
`;

const Item = styled.div`
  font-size: 1.4em;
  font-weight: bolder;
`;

const Menu = () => {
  const items = [{
    label: 'Urzov',
    href: '/',
  }, {
    label: 'Kdo jsme',
    href: 'kdo-jsme',
  }, {
    label: 'Co chceme',
    href: 'co-chceme',
  }, {
    label: 'Zapojit se',
    href: 'zapojit-se',
  }];

  return (
    <Wrapper>
      {items.map((i) => <Item key={i.label}><Link href={i.href}><a style={{ textDecoration: 'none' }}>{i.label.toUpperCase()}</a></Link></Item>)}
    </Wrapper>
  );
};

export default Menu;
