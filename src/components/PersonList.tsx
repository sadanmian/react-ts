type PersonListProps = {
  names: { first: string; last: string }[];
};
export const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((e, i) => (
        <h3 key={i}>
          {e.first} {e.last}
        </h3>
      ))}
    </div>
  );
};
