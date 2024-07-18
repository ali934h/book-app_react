// Header.jsx
function Header() {
  return (
    <div className="flex items-center justify-between rounded-md bg-th3 px-3 py-2 text-th1">
      <h1 className="text-xl font-bold">Book App</h1>
      <div>
        <a
          href="https://alihosseini.dev"
          target="_blank"
          rel="noreferrer"
          className="text-lg font-semibold"
        >
          alihosseini.dev
        </a>
      </div>
    </div>
  );
}

export default Header;
