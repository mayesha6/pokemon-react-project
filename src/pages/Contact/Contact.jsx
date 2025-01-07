
import { Form } from "react-router-dom"
import GoogleMap from "../../components/GoogleMap/GoogleMap";

const Contact = () => {
  return (
    <section className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <Form method="POST" action="/contact">
          <div>
            <label htmlFor="username" className="block capitalize text-lg font-semibold">Username: </label>
            <input type="text" name="username" id="username" placeholder="Enter your name: " required className="mt-1 mb-4 border border-gray-400 outline-none rounded p-2 w-full"/>
          </div>
          <div>
            <label htmlFor="email" className="block capitalize text-lg font-semibold">email: </label>
            <input type="email" name="email" id="email" placeholder="Enter your email: " required className="mt-1 mb-4 border border-gray-400 outline-none rounded p-2 w-full"/>
          </div>
          <div>
            <label htmlFor="message" className="block capitalize text-lg font-semibold">email: </label>
            <textarea name="message" id="message" placeholder="Message" required className="resize-none mt-1 mb-4 border border-gray-400 outline-none rounded p-2 w-full h-40"></textarea>
          </div>
          <div>
            <button type="submit" className="py-2 px-9 bg-gray-800 rounded duration-300 hover:bg-[#8EB486] text-white font-bold">Submit</button>
          </div>
        </Form>
      </div>
      <div>
        <GoogleMap/>
      </div>
    </section>
  )
}


export default Contact