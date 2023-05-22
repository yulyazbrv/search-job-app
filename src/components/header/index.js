import { Flex } from '@mantine/core';
import logo from './assets/logo.png';
import './index.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

const HeaderContent = () => {
  const { pathname } = useLocation();
  return (
    <Flex align="center" mih={84} gap={280} className='header-wrapper'>
      <Flex gap={12} align="center">
        <img src={logo} alt="logo" className="main-logo"></img>
        <p className="title">Jobored</p>
      </Flex>
      <Flex gap={60}>
        <Link
          to="/"
          className={classNames('link', pathname === '/' && 'active')}>
          Поиск вакансий
        </Link>
        <Link
          to="/favorites"
          className={classNames('link', pathname === '/favorites' && 'active')}>
          Избранное
        </Link>
      </Flex>
    </Flex>
  );
};

export { HeaderContent };
