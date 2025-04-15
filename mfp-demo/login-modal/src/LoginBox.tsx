export default function LoginBox({ name }: { name: string }) {
  const doLogin = () => {
    // call some API..
    // then update the context
  };

  return (
    <>
      <div>
        <p>{name}</p>
        <input type="text" placeholder="Login" />
        <br />
        <input type="password" />
        <button onClick={doLogin}>Login</button>
      </div>
    </>
  );
}
