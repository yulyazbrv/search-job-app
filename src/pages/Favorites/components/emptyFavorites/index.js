import { Button, Flex } from '@mantine/core';
import emptyIcon from './assets/empty.png';
import { useNavigate } from 'react-router-dom';
import './index.css';

const EmptyFavorites = () => {
  const navigate = useNavigate();

  const backToSearch = () => {
    navigate("/");
  };
  return (
    <Flex direction={'column'} gap={32} align={'center'} mt={104}>
      <img src={emptyIcon} alt="emptyIcon" className="empty-img"></img>
      <p className="empty-title">Упс, здесь ничего нет!</p>
      <Button
      onClick={backToSearch}
        radius={8}
        styles={{
          root: {
            background: '#DEECFF',
            width: 164,
            height: 42,
            '&:hover': { background: '#DEECFF' },
          },
          label: {
            fontWeight: 600,
            fontSize: 14,
            lineHeight: '155%',
            color: '#3B7CD3',
            fontFamily: 'Open Sans',
          },
        }}>
        Поиск ваканский
      </Button>
    </Flex>
  );
};

export { EmptyFavorites };
