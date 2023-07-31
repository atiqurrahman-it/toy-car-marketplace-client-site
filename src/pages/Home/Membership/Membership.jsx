import member from "../../../assets/member.jpg";

const Membership = () => {
  return (
    <div
      className="hero md:h-[550px]"
      style={{
        backgroundImage: `url(${member})`,
      }}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="hero-content text-center text-neutral-content  w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="max-w-lg text-white">
          <h1 className="mb-5 text-3xl font-bold">
            SPECIAL OFFER FOR SUBSCRIPTION
          </h1>
          <h1 className="mb-5 text-4xl font-bold">
            GET INSTANT DISCOUNT FOR MEMBERSHIP
          </h1>
          <p className="mb-5">
            Subscribe our newsletter and all latest news of our latest product,
            promotion and offers
          </p>
          <div className="relative text-black">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-warning absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
