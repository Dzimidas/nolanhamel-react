import img1 from "./imgs/nolan.jpg";
import img2 from "./imgs/sophie.jpg";
import img3 from "./imgs/piper.png";
import img4 from "./imgs/boone.png";


function Team() {
  return (
    <section className="text-gray-800 body-font bg-indigo-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
            Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We are devoted to providing an amazing experience when using this
            website
          </p>
        </div>
        <div class="flex flex-wrap -m-2">
          <div class="p-2 lg:w-1/2 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-lg bg-white">
              <img
                alt="team"
                class="w-40 h-40 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={img1}
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Nolan Hamel
                </h2>
                <p class="text-gray-500">Web Developer</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/2 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-lg bg-white">
              <img
                alt="team"
                class="w-40 h-40 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={img2}
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Sophie Nielsen
                </h2>
                <p class="text-gray-500">Emotional Support</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/2 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-lg bg-white">
              <img
                alt="team"
                class="w-40 h-40 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={img3}
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Piper Hamel
                </h2>
                <p class="text-gray-500">IT Manager</p>
              </div>
            </div>
          </div>
          <div class="p-2 lg:w-1/2 md:w-1/2 w-full">
            <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg shadow-lg bg-white">
              <img
                alt="team"
                class="w-40 h-40 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={img4}
              />
              <div class="flex-grow">
                <h2 class="text-gray-900 title-font font-medium">
                  Boone (Boonie Scoonie) Hamel
                </h2>
                <p class="text-gray-500">Customer Service Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
