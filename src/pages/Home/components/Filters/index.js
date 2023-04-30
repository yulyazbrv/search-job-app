import './index.css';
import ResetIcon from './assets/remove.png';
import { Button, Flex, Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useCatalogues } from '../../../../core/catalogues/useCatalogues';

const selectStyles = {
  input: { borderRadius: 8, height: 42 },
  rightSection: { pointerEvents: 'none' },
};

const Filters = () => {
  const { data: catalogues } = useCatalogues();

  return (
    <div className="filter-wrapper">
      <Flex justify={'space-between'} align={'center'} mb={32}>
        <p className="filter-title">Фильтры</p>
        <Flex align={'center'}>
          <p className="reset-title">Сбросить всё</p>
          <img alt="reset" src={ResetIcon} className="reset-icon"></img>
        </Flex>
      </Flex>
      <Flex direction={'column'} gap={20}>
        <Select
          label={<p className="filter-select-title">Отрасль</p>}
          placeholder="Выберете отрасль"
          rightSection={<IconChevronDown size="1rem" />}
          rightSectionWidth={30}
          styles={selectStyles}
          data={catalogues ? catalogues.map((item) => item.title_rus) : []}
        />
        <Flex direction={'column'} gap={8}>
          <Select
            label={<p className="filter-select-title">Оклад</p>}
            placeholder="От"
            styles={selectStyles}
            data={['React', 'Angular', 'Svelte', 'Vue']}
          />
          <Select
            placeholder="До"
            styles={selectStyles}
            data={['React', 'Angular', 'Svelte', 'Vue']}
          />
        </Flex>
      </Flex>
      <Button
        radius={8}
        color="#5E96FC"
        mt={20}
        styles={{ root: { height: 40, width: '100%' } }}>
        <p className="filter-apply">Применить</p>
      </Button>
    </div>
  );
};

export { Filters };
