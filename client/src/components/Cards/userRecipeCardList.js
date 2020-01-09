import React, {useState, useEffect} from 'react';
import RecipeCard from './recipeCard';
import styled from 'styled-components';
import {axiosWithAuth} from '../../utils/axiosWithAuth';

//styleing will go here
const RecipeList = styled.div`
  display:flex;
  flex-flow: row wrap;
  justify-content:space-evenly;
`

function UserRecipeCardList(props) {
  const [recipes, setRecipes] = useState([]);
  const userId = localStorage.getItem('user_id');
  useEffect(() => {
    axiosWithAuth()
      .get(`/recipes/${userId}`) // /${userId}
      .then(res => setRecipes(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <RecipeList>
       {recipes.map(recipe => (
         <RecipeCard key={recipe.id} recipe={recipe}/>
      ))}
    </RecipeList>
  );
}

export default UserRecipeCardList;