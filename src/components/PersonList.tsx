import type { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
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
