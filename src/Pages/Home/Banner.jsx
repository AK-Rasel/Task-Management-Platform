

const Banner = () => {
    return (
//         <div className="hero min-h-[70vh]  mx-auto" style={{backgroundImage: 'url(https://storage.googleapis.com/profit-prod/wp-content/uploads/2021/03/3a50174d-online-to-do-list.jpg)'}}>
//   <div className="hero-overlay bg-opacity-60"></div>
//   <div className="hero-content text-center text-neutral-content">
//     <div className="max-w-xl">
//       <h1 className="mb-5 text-8xl font-bold">welcome </h1>
//       <p className="mb-5 text-xl">Set your tesks</p>
      // <button className="btn btn-primary">Let’s Explore</button>
//     </div>
//   </div>
// </div>
<div className="hero min-h-[70vh] my-6 md:my-0">
  <div className="hero-content gap-16 flex-col-reverse md:flex-row">
    <img src="https://i.ibb.co/804HdmR/task-management-workflow.webp" className="lg:max-w-xl md:max-w-sm flex-1 rounded-lg " />
    <div className="flex-1 text-center md:text-start">
      <h1 className="lg:text-7xl text-5xl font-bold uppercase">welcome</h1>
      <h2 className="py-4 lg:text-xl text-lg font-bold">Manage Your Tesk</h2>
      <button className="btn bg-[#2563DC] text-white">Let’s Explore</button>
    </div>
  </div>
</div>
    );
};

export default Banner;