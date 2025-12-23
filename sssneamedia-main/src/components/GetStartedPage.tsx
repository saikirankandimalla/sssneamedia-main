import { useState } from "react";



export default function GetStartedPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    interest: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Details submitted successfully!");
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-6 pt-24">
      <div
        className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full animate-fade-in-up"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Start Your Career Journey
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Tell us a little about yourself.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3 focus:outline-blue-600"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="text"
            name="education"
            placeholder="Highest Qualification"
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-3"
          />

          <select
            name="interest"
            required
            onChange={handleChange}
            aria-label="Interested In"
            className="w-full border rounded-xl px-4 py-3 bg-white"
          >
            <option value="">Interested In</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Full Stack Development">Full Stack Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Journalism">Journalism</option>
            <option value="Media Production">Media Production</option>
          </select>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-700 text-white py-3 rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Submit & Continue
          </button>
        </form>
      </div>
    </section>
  );
}
