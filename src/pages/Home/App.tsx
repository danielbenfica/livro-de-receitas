import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import NewRecipeModal from '../../components/NewRecipeModal';
import axios from 'axios';
import { RecipeCardProps } from '../../types/IRecipe';
import ViewRecipes from '../../components/ViewRecipes';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [recipes, setRecipes] = useState<RecipeCardProps[]>([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    async function getRecipes(){
      const response = (await axios.get('https://livro-de-receitas-api.vercel.app/api/recipes')).data
      setRecipes(response)
    }

    getRecipes()
  }, [isModalOpen])

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} filter={filter} setFilter={setFilter} />
      <ViewRecipes recipes={recipes.filter(recipe => recipe.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) } />
      <NewRecipeModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}

export default App;
