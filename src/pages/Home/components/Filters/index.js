import './index.css';
import ResetIcon from './assets/remove.png';
import { Button, Flex, NumberInput, Select } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useCatalogues } from '../../../../core/catalogues/useCatalogues';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();

  const applyFilters = () => {
    setFilters(catalog, paymentFrom, paymentTo);
  };

  const resetFilters = () => {
    setCatalog('');
    setPaymentFrom('');
    setPaymentTo('');
  };

  useEffect(() => {
    return () => {
      const filters = { catalog, paymentFrom, paymentTo };
      if (filters.catalog || filters.paymentFrom || filters.paymentTo) {
        localStorage.setItem('filters', JSON.stringify(filters));
      }
    };
  }, [catalog, paymentFrom, paymentTo]);

  useEffect(() => {
    setTimeout(() => {
      const filters = localStorage.getItem('filters');
      if (filters) {
        const parsedFilters = JSON.parse(filters);
        setCatalog(parsedFilters.catalog);
        setPaymentFrom(parsedFilters.paymentFrom);
        setPaymentTo(parsedFilters.paymentTo);
      }
    }, 0)
    
  }, [location]);

  return (
    <div className="filter-wrapper">
      <Flex justify={'space-between'} align={'center'} mb={32}>
        <p className="filter-title">Фильтры</p>
        <Flex
          align={'center'}
          className="reset-container"
          onClick={resetFilters}>
          <p className="reset-title">Сбросить всё</p>
          <img alt="reset" src={ResetIcon} className="reset-icon"></img>
        </Flex>
      </Flex>
      <Flex direction={'column'} gap={20}>
        <Select
          className="input-container"
          data-elem="industry-select"
          label={<p className="filter-select-title">Отрасль</p>}
          placeholder="Выберете отрасль"
          rightSection={<IconChevronDown size="1rem" />}
          rightSectionWidth={30}
          styles={selectStyles}
          data={
            catalogues
              ? catalogues.map((item) => ({
                  value: item.key,
                  label: item.title_rus,
                }))
              : []
          }
          value={catalog}
          onChange={setCatalog}
        />
        <Flex direction={'column'} gap={8}>
          <NumberInput
            className="input-container"
            data-elem="salary-from-input"
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
            className="input-container"
            data-elem="salary-to-input"
            placeholder="До"
            styles={selectStyles}
            min={0}
            max={500000}
            value={paymentTo}
            onChange={setPaymentTo}
          />
        </Flex>
      </Flex>
      <Button
        data-elem="search-button"
        radius={8}
        color="#5E96FC"
        mt={20}
        onClick={applyFilters}
        className="apply-button"
        styles={{ root: { height: 40, width: '100%' } }}>
        <p className="filter-apply">Применить</p>
      </Button>
    </div>
  );
};

export { Filters };
