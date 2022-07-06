const CountriesList = ({ countries }) => {
    return (
        <div>
            { countries.map(c => <p key={c.ccn3}>{c.name.common}</p>) }
        </div>
    );
}

export default CountriesList;