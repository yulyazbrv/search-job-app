import { Button, Flex, em } from '@mantine/core';
import emptyIcon from './assets/empty.png';
import './index.css';

const EmptyFavorites = () => {
  return (
    <Flex direction={'column'} gap={32} align={'center'} mt={104}>
      <img src={emptyIcon} alt="emptyIcon" className="empty-img"></img>
      <p className="empty-title">Упс, здесь ничего нет!</p>
      <Button
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
