import search_icon from './search.png'

interface searchProp{
    search : string
    updateSearch : Function
}
export default function SearchBar(props : searchProp){
    return (
        <div className='search-bar-wrapper'>
            <div className='search-bar-icon'>
                <img src={search_icon}></img>
            </div>
            <input
                type="text" 
                placeholder="Search" 
                value={props.search} 
                onChange={(e) => props.updateSearch(e.target.value)}
                className='search-bar-input'
            />
        </div>
    )
}