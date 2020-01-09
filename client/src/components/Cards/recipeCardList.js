import React from 'react';
import RecipeCard from './recipeCard';
import styled from 'styled-components';

//styleing will go here
const RecipeList = styled.div`
  display:flex;
  flex-flow: row wrap;
  justify-content:space-evenly;
`

function RecipeCardList(props) {


  return (
    <RecipeList>
       {props.recipes.map(recipe => (
         <RecipeCard key={recipe.id} recipe={recipe}/>
      ))}
    </RecipeList>
  );
}

export default RecipeCardList;
