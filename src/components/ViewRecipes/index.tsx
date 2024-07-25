import { RecipeCardProps } from "../../types/IRecipe"
import RecipeCard from "../RecipeCard"
import style from './ViewRecipes.module.css'

interface ViewRecipesProps{
  recipes: RecipeCardProps[]
}

function ViewRecipes({recipes}: ViewRecipesProps){
  return(
    <div className={style.recipesContainer}> 
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe}  />
      ))}
    </div>
  )
}

export default ViewRecipes