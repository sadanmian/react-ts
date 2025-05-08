type GreetProps = {
  name: string;
};

export const Greet = (props: GreetProps) => {
  return <h2>Welcome {props.name}. You have 10 unread Messages</h2>;
};
