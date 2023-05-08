import './index.css';
import ResetIcon from './assets/remove.png';
import { Button, Flex, NumberInput, Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useCatalogues } from '../../../../core/catalogues/useCatalogues';
import { useState } from 'react';

const selectStyles = {
  input: { borderRadius: 8, height: 42 },
  rightSection: { pointerEvents: 'none' },
};

const Filters = (props) => {
  const { setFilters } = props;
  const { data: catalogues } = useCatalogues();
  const [catalog, setCatalog] = useState('');
  const [paymentFrom, setPaymentFrom] = useState('');
  const [paymentTo, setPaymentTo] = useState('');

  const applyFilters = () => {
    setFilters(catalog, paymentFrom, paymentTo)
  };

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
          value={catalog}
          onChange={setCatalog}
        />
        <Flex direction={'column'} gap={8}>
          <NumberInput
            label={<p className="filter-select-title">Оклад</p>}
            placeholder="От"
            styles={selectStyles}
            min={0}
            max={500000}
            step={100}
            value={paymentFrom}
            onChange={setPaymentFrom}
          />
          <NumberInput
            placeholder="До"
            styles={selectStyles}
            min={0}
            max={500000}
            step={100}
            value={paymentTo}
            onChange={setPaymentTo}
          />
        </Flex>
      </Flex>
      <Button
        radius={8}
        color="#5E96FC"
        mt={20}
        onClick={applyFilters}
        styles={{ root: { height: 40, width: '100%' } }}>
        <p className="filter-apply">Применить</p>
      </Button>
    </div>
  );
};

export { Filters };
