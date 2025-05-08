type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <h2>
      {props.isLoggedIn
        ? `Welcome ${props.name}. You have ${props.messageCount} unread Messages`
        : "Welcome guest"}
    </h2>
  );
};
