import React from "react";
import vg from "../assets/1.jpg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2" id="">
        <img src={vg} alt="Graphics" />
        <div>
          <p>We are your one and only solution to the tech problems</p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            explicabo quibusdam placeat cum enim optio at iste vitae accusantium
            ab debitis laborum repudiandae atque aperiam quisquam ut
            dignissimos? Eaque incidunt soluta, iste unde quibusdam molestiae
            ipsam odit porro? Incidunt harum soluta dicta adipisci quam quod
            nesciunt aperiam recusandae. Eveniet omnis totam, molestiae ullam
            quos, eligendi nemo modi quo animi pariatur doloremque incidunt, non
            exercitationem quidem obcaecati. Laboriosam dolorum accusantium odit
            ratione explicabo porro libero fugiat? Enim qui ratione, possimus
            deserunt molestias nobis hic placeat nemo aperiam repudiandae. Quas
            provident assumenda quis eum corrupti sit molestiae reiciendis,
            porro officia qui blanditiis?
          </p>
        </div>
      </div>
      <div className="home4" id="brand">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
