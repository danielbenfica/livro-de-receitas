import { useState } from 'react'
import { createClient } from 'pexels';
import style from './NewRecipeModal.module.css'
import axios from 'axios'

interface NewRecipeModalProps{
  isModalOpen: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function  NewRecipeModal({isModalOpen, setIsModalOpen}: NewRecipeModalProps){
  const [imageLink, setImageLink] = useState<string>("")
  const [linkRecipe, setLinkRecipe] = useState("")
  const [name, setName] = useState("")

  const client = createClient('CURE6Ss7oXDeSJ2wp7zMSILW6Qf7702UGXPJkrrgKJXR0I8a3uYb5efD');

  function submitForm(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    async function getImageLink() {
      const query = imageLink
      await client.photos.search({ query, per_page: 1 }).then((photos: any) => createRecipe(String(photos.photos[0].src.medium)));
    }
    
    getImageLink()

    async function createRecipe(imageLink: string){
      axios.post('https://livro-de-receitas-api.vercel.app/api/recipes', {
        linkRecipe: linkRecipe,
        imageLink: imageLink,
        name: name
      })
    }

    setIsModalOpen(false)
  }

  return(
    isModalOpen ? (
      <div className={style.overLay}>
      <form action="" className={style.form} onSubmit={submitForm}>
        <h2> - Nova Receita...</h2>
        <label htmlFor="linkImage">
          Imagem:
        </label>
        <input 
          type="text" 
          id="linkImage"
          value={imageLink}
          onChange={e => setImageLink(e.target.value)}
        />
        <label htmlFor="linkRecipe">
          Link Receita:
        </label>
        <input 
          type="text" 
          id="linkRecipe"
          value={linkRecipe}
          onChange={e => setLinkRecipe(e.target.value)}
        />
        <label htmlFor="name">
          Nome da Receita:
        </label>
        <input 
          type="text" 
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <button type='submit'>Anotar</button>
      </form>
    </div>
    ) : <></>
   
  )
}

export default NewRecipeModal