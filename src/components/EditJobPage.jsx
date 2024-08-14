import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
const EditJobPage = ({ updateJobSumit }) => {
  const navigate = useNavigate();
  // previous data
  const job = useLoaderData();
  const { id } = useParams();
  const [form, setForm] = useState({
    id: job.id,
    title: job.title,
    type: job.type,
    location: job.location,
    description: job.description,
    salary: job.salary,
    company: {
      name: job.company.name,
      description: job.company.description,
      contactEmail: job.company.contactEmail,
      contactPhone: job.company.contactPhone,
    },
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      if (name.includes(".")) {
        const [objectKey, nestedKey] = name.split(".");
        return {
          ...prev,
          [objectKey]: {
            ...prev[objectKey],
            [nestedKey]: value,
          },
        };
      }
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const updatedJob = {
      id: form.id,
      title: form.title,
      type: form.type,
      location: form.location,
      description: form.description,
      salary: form.salary,
      company: {
        name: form.company.name,
        description: form.company.description,
        contactEmail: form.company.contactEmail,
        contactPhone: form.company.contactPhone,
      },
    };
    updateJobSumit(updatedJob);
    console.log(updatedJob);
    toast.success("Job Updated Successfully");

    return navigate(`/jobs/${id}`);
  };
  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Edit Job
            </h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={form.type}
                onChange={handleFormChange}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                value={form.title}
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Fullstack Software engineer"
                required
                onChange={handleFormChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                value={form.description}
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                onChange={handleFormChange}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Salary
              </label>
              <select
                id="salary"
                value={form.salary}
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                onChange={handleFormChange}
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                value={form.location}
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
                onChange={handleFormChange}
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                value={form.company.name}
                id="company"
                name="company.name"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                onChange={handleFormChange}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company.description"
                value={form.company.description}
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                onChange={handleFormChange}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                value={form.company.contactEmail}
                name="company.contactEmail"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                onChange={handleFormChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                value={form.company.contactPhone}
                id="contact_phone"
                name="company.contactPhone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                onChange={handleFormChange}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;
