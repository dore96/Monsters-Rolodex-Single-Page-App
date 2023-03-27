import './search-box.styles.css';

const SearchBar =({onChangeHandler, placeholder,className }) => {
    return(
      <input 
       className={`search-box ${className}`}
       type = 'search'
       placeholder={placeholder}
       onChange={onChangeHandler}
       />
    );
};

export default SearchBar;