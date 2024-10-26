import './Hero.css';
export const Hero = () => {
  return (
      <section className="hero-banner-section">
        <div className="container">
          <div className="inner-container">
            <div className="hero-content-wrapper">
              <h1 className="hero-heading">Lorem ipsum dolor sit amet.</h1>
              <p className="hero-para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias maxime possimus unde maiores, exercitationem
                doloribus. Delectus ducimus nam libero maiores rem expedita quam
                sunt dolorem hic vitae, labore eos quibusdam.
              </p>
              <div className="button-wrapper">
                <button className="btn">Shop Now</button>
                <button className=" btn btn-secondary">Category</button>
              </div>
              <p>Also Available Now</p>
              <img className="small-img" src="vite.svg" alt="Shopping" />
            </div>
            <figure className="hero-image">
              <img src="download-the-app-swr.png" alt="Brand" />
            </figure>
          </div>
        </div>
      </section>

  );
};
