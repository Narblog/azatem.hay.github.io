import "./search.css"

const Search =()=>{
    return(
       <div className="search">
          <input type="text" placeholder="Type text for search..."/>
          <button>All</button>
          <button>Done</button>
          <button>Important</button>
       </div>
    )
   }
   
   export default Search