function App() {
  return (
    <>
      <section className="">
        <nav class="flex items-center justify-between flex-wrap bg-transparent px-6 py-3 absolute">
          <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">
              Tailwind CSS
            </span>
          </div>
          <div class=" flex-grow flex items-center w-auto">
            <div class="text-sm flex-grow">
              <a
                href="#responsive-header"
                class=" inline-block mt-0 text-teal-200 hover:text-white mr-4"
              >
                Docs
              </a>
              <a
                href="#responsive-header"
                class="inline-block mt-0 text-teal-200 hover:text-white mr-4"
              >
                Examples
              </a>
              <a
                href="#responsive-header"
                class="inline-block mt-0 text-teal-200 hover:text-white"
              >
                Blog
              </a>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default App;
