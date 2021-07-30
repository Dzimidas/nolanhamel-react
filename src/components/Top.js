function Top() {
  return (
    <header class="fixed w-full bg-indigo-700 backdrop-filter backdrop-blur-xl bg-opacity-60 border border-indigo-400 text-white md:flex justify-between">
      <a class="font-bold block px-6 py-2 hover:bg-gray-800" href="#top">
        Nolan Hamel
      </a>
      <nav>
        <ul class="md:flex">
          <li>
            <a class="block px-6 py-2 hover:bg-gray-800" href="#hello">
              Hello
            </a>
          </li>
          <li>
            <a class="block px-6 py-2 hover:bg-gray-800" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="block px-6 py-2 hover:bg-gray-800" href="#our-team">
              Our Team
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Top;