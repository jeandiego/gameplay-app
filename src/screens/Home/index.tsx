/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { HomeView } from './view';

export function Home() {
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  console.log(category);

  return (
    <HomeView category={category} handleCategorySelect={handleCategorySelect} />
  );
}

export default Home;
