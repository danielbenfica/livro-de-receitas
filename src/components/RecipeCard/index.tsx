import { RecipeCardProps } from "../../types/IRecipe"
import style from './RecipeCard.module.css'

function RecipeCard(props: RecipeCardProps){
  return(
    <a href={props.linkRecipe} className={style.linkRecipe}> 
      <img src={props.imageLink} alt="" />
      {/* <img src="https://images.pexels.com/photos/3573351/pexels-photo-3573351.png" alt="" /> */}
      <h2>{props.name}</h2>
    </a>
  )
}

export default RecipeCard