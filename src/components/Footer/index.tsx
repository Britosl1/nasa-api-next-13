export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-color-3 px-40 h-36">
      <div>
        <p className="text-color-2">Simple project created to test NextJs 13</p>
      </div>
      <div>
        <ul>
          <li className="text-color-2 cursor-pointer  hover:font-bold">
            lucasbrito.carneiro@gmail.com
          </li>
          <li className="text-color-2 cursor-pointer  hover:font-bold">
            <a
              href="https://github.com/Britosl1/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="text-color-2 cursor-pointer  hover:font-bold">
            <a
              href="https://www.linkedin.com/in/lucas-c-brito/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <p></p>
      </div>
    </footer>
  );
}
