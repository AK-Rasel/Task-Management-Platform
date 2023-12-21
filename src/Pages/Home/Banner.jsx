

const Banner = () => {
    return (
        <div className="hero min-h-[70vh]  mx-auto" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-xl">
      <h1 className="mb-5 text-8xl font-bold">welcome </h1>
      <p className="mb-5 text-xl">Set your tesks</p>
      <button className="btn btn-primary">Let’s Explore</button>
    </div>
  </div>
</div>
    );
};

export default Banner;