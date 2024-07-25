import SearchBar from '../SearchBar'
import style from './Header.module.css'

interface HeaderProps{
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  filter: string,
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

function Header({setIsModalOpen, filter, setFilter}: HeaderProps){
  return(
    <header className={style.header}>
      <div className={style.logo}>
        <span>Livro de</span>
        <span>Receitas</span>
      </div>
      <div className={style.plusSearchContainer}>
        <SearchBar filter={filter} setFilter={setFilter} />
        <img onClick={() => setIsModalOpen(true)} className={style.plusIcon} src="./icons/plus.png" alt="Adicionar Receita " />
      </div>
    </header>
  )
}

export default Header