import React from 'react';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { Container, Header, Categories, Title } from './styles';

export function HomeView(props: any) {
  const { category, handleCategorySelect } = props;

  return (
    <Container>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>
      <Categories>
        <Title>Categoria</Title>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </Categories>
    </Container>
  );
}

export default HomeView;
