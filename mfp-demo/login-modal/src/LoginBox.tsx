export default function LoginBox({ title }: { title: string }) {
  return (
    <>
      <div>
        <p>{title}</p>
        <input type="text" placeholder="Login" />
        <br />
        <input type="password" />
        <button>Login</button>
      </div>
    </>
  );
}
