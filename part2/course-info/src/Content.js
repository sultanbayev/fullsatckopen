import Part from "./Part";

const Content = ({ parts }) => {
    return (
      <div>
        { parts.map((part) => {
            return <Part key={part.name} name={part.name} count={part.exercises} />
          })
        }
      </div>
    );
  }

  export default Content