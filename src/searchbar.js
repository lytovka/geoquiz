

const filterBar = () => (
    <form action="/" method="get">
        <label htmlFor="country search"> </label>

        <input
            type="text"
            id="country search"
            placeholder="Search for a country here...."
            name="input"
        />
        <button type="submit"> Find </button>
    </form>

);

const { search } = window.location;
const query = new URLSearchParams(search).get('input');

//This arrow function used is there to obtain the filtered countries
const countries_relevant = (countries, query) => {

    if (!query) {
        return countries;

    }

    return countries.filter((country) => {

        const lowerCountry = country.name.toLowerCase();
        return lowerCountry.includes(query);
    });

}

//This will seek to render the output that we desire with the help of routers
return (
    <div>

        <Search>



        </Search>
    </div>

)

