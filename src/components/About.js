import img1 from "./imgs/programming.jpg";
import img2 from "./imgs/hiking.jpg";
import img3 from "./imgs/food.jpg";

function About(props) {
  return (
    <div className="grid p-10 gap-10 md:grid-cols-3">
      <div className="card">
        <h3 className="font-bold">Programming</h3>
        <img alt="about" src={img1} />
        <p>
          I love programming -- I'm most experienced with C/C++, Matlab, and
          Python
        </p>
      </div>

      <div className="card">
        <h3 className="font-bold">Hiking</h3>
        <img alt="about" src={img2} />
        <p>I love the outdoors and I enjoy traveling and going on hikes</p>
      </div>

      <div className="card">
        <h3 className="font-bold">Food</h3>
        <img alt="about" src={img3} />
        <p>I love preparing and eating delicious meals</p>
      </div>
    </div>
  );
}

export default About;
