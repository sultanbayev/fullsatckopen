import Person from "./Person";

const Persons = ({ persons, deletePersonOf }) => {

    return (
        <div>
            { persons.map(person => {
                return (<Person
                    key={person.id}
                    person={person}
                    deletePerson={() => deletePersonOf(person)}
                />);
            }) }
        </div>
    );
}

export default Persons;