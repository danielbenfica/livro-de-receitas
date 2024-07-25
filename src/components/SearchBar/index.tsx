import style from './SearchBar.module.css'

interface SearchBarProps{
  filter: string,
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

function SearchBar({filter, setFilter}: SearchBarProps){
  return(
    <input 
      type="text" 
      className={style.SearchBar} 
      value={filter}
      onChange={e => setFilter(e.target.value)}
      placeholder='Qual receita você está buscando?...'  
    />
  )
}

export default SearchBar