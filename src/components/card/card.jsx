import "./card.style.css";

const Card = ({monster}) =>  {
    const { name, email, id } = monster;

    return (
      <div className="card-container ">
        <img
          alt={`monster${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
        <h1 key={id}>{name}</h1>
      </div>
    );
};

export default Card;
