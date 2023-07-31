import { FaMapMarkerAlt, FaMobileAlt, FaRegEnvelope } from "react-icons/fa";
import './ContactUs.css'
import Swal from "sweetalert2";
const ContactUs = () => {
  const handelContact=(event)=>{
    event.preventDefault()
    const form=event.target
    const name=form.name.value
    const email=form.email.value
    const subject=form.subject.value
    const message=form.message.value
    const user={name,email,subject,message}
    console.log(user)

    if(user&& email&& subject&& message){
      Swal.fire({
        icon: 'success',
        title: `HI ${name}`,
        text: 'thanks for contacting with us !',
      })
    }

  }
  return (
    <div className="overflow-hidden">
      <div className="grid grid-cols-1 gap-10 px-10 md:px-0 md:grid-cols-3 my-5">
        <div className="card bg-white  text-black  shadow-2xl w-full hover:shadow-cyan-500/50 shadow-indigo-500/40" data-aos="fade-right">
          <div className="card-body text-center" >
            <div className="">
              <button className="btn-lg btn btn-circle btn-outline btn-warning">
                <FaMapMarkerAlt className="text-3xl" />
              </button>
            </div>
            <h2 className="text-2xl font-extrabold	">Our Location</h2>
            <p>(800) 123 456 789 / (800) 123 456 789</p>
            <p>info@KidzCarLand.com</p>
          </div>
        </div>
        <div className="card bg-white  text-black shadow-2xl w-full hover:shadow-cyan-500/50 shadow-indigo-500/40"  data-aos="flip-up">
          <div className="card-body text-center" >
            <div>
              <button className="btn-lg btn btn-circle btn-outline btn-warning">
                <FaMobileAlt className="text-3xl" />
              </button>
            </div>
            <h2 className="text-2xl font-extrabold	">Contact us Anytime</h2>
            <p>Mobile: 012 345 678</p>
            <p>Fax: 123 456 789</p>
          </div>
        </div>
        <div className="card  bg-white  text-black shadow-2xl w-full hover:shadow-cyan-500/50 shadow-indigo-500/40" data-aos="fade-left">
          <div className="card-body text-center">
            <div>
              <button className="btn-lg btn btn-circle btn-outline btn-warning">
                <FaRegEnvelope className="text-3xl" />
              </button>
            </div>
            <h2 className="text-2xl font-extrabold">Write Some Words</h2>
            <p>Support24/7@KidzCarLand.com</p>
            <p>info@KidzCarLand.com</p>
          </div>
        </div>
      </div>
      <div className="px-10 md:px-0">
        <h1 className="mt-10 text-3xl font-extrabold" data-aos="zoom-in-up">GET IN TOUCH</h1>
        <form onSubmit={handelContact} className="my-10  ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="Email"
                name="email"
                required
                placeholder="Enter Email"
                className="input input-bordered"
              />
            </div>
          </div>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <textarea id="textarea" name="message" rows="10" cols="10" className="mt-2 p-2 border border-black rounded-md"></textarea>

            </div>
          </div>
          <div className=" py-6">
            <input
              className="btn btn-warning"
              type="submit"
              value="Send a Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
