import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import useForm from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {

  const navigete = useNavigate();
  const location = useLocation();
  console.log("queryString",queryString)
  const { q = '' } = queryString.parse( location.search );
  const heroes = q && !Array.isArray(q) ? getHeroesByName(q) : [] 

  const { inputs, handleChange } = useForm({
    searchText: q && !Array.isArray(q) ? q : ""
  });

  const showSearch = q?.length === 0;
  const showError =  !!q?.length && heroes.length === 0;

  const { searchText } = inputs;

  const onSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if(searchText.trim().length <= 1) return;
    navigete(`?q=${searchText}`)
  }

  return (
    <>
      <h1>
        Search
      </h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr/>
          <form onSubmit={(e) => onSearchSubmit(e)}>
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleChange}
            />
            <button className="btn btn-outline-primary mt-1">
              Search 
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>
            Results
          </h4>
          <hr/>
          

          <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none'}} >
            Search a hero
          </div>
          <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none'}}>
            No hero with <b>{q}</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
          

          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  )
}
