import { Flex, Loader } from '@mantine/core';
import './index.css';
import { Card } from '../../../../components/card';
import { useVacancy } from '../../../../core/vacancies/useVacancy';
import { useParams } from 'react-router-dom';
import { favoritesReducer } from '../../../../store/favoritesVacancies';
import { useReducer } from 'react';
import { getFavoriteVacancies } from '../../../../helpers/favoriteVacanciesHelper';

const Vacancy = () => {
  const { id } = useParams();
  const { data: vacancy, isLoading } = useVacancy(id);
  const [state, dispatch] = useReducer(favoritesReducer, {
    favoritesVacancies: getFavoriteVacancies(),
  });

  return (
    <Flex direction={'column'} align={'center'} mt={24}>
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Card
              vacancy={vacancy}
              setFavorite={() =>
                dispatch({ type: 'updateFavorites', payload: vacancy })
              }
              isFavorite={
                !!state.favoritesVacancies.find(
                  (item) => item.id === vacancy.id
                )
              } onCardClick={()=>{}}></Card>
            <Flex
              className="vacancy-info"
              direction={'column'}
              w={773}
              gap={20}
              p={24}
              mt={20}>
              <div
              className='vacancy-info-text'
                dangerouslySetInnerHTML={{ __html: vacancy.vacancyRichText }}
              />
            </Flex>
          </>
        )}
      </>
    </Flex>
  );
};

export { Vacancy };
