function Hello() {
  return (
    <section className="backdrop text-white text-center grid place-items-center">
      <div>
        <p className="text-lg font-bold uppercase tracking-wider">
          Hi it's Nolan from
        </p>
        <h1 className="font-bold text-8xl leading-none">Rock Hill, SC</h1>
        <p className="font-mono text-lg">Major: Computer Science</p>
        <a
          href="https://www.linkedin.com/in/nolan-hamel/"
          rel="noopener noreferrer"
          target="_blank"
          className="mt-10 bg-white rounded-lg px-8 py-4 text-black inline-block hover:bg-gray-800 hover:text-white"
        >
          Connect
        </a>
      </div>
    </section>
  );
}

export default Hello;
