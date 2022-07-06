const CountriesList = ({ countries, setFilter }) => {
    return (
        <div>
            { countries.map(country => {
                return (
                    <div key={country.ccn3}>
                        {country.name.common}
                        <button onClick={() => setFilter(country.name.common)}>show</button>
                    </div>
                );
            }) }
        </div>
    );
}

export default CountriesList;