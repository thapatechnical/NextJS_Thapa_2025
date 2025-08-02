"use client";

// import { useRouter } from "next/navigation";
import { createHospitalAction } from "./hospital.action";

export const HospitalForm = () => {
  // const router = useRouter();
  const handleCreateHospital = async (formData) => {
    const data = Object.fromEntries(formData);
    await createHospitalAction(data);
    // router.refresh();
  };

  return (
    <>
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          🏥 Add New Hospital
        </h2>
        <form
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 bg-black shadow p-6 rounded-xl "
          action={handleCreateHospital}
        >
          <input
            className="border p-2 rounded"
            type="text"
            name="name"
            placeholder="Hospital Name"
          />
          <input
            className="border p-2 rounded"
            type="text"
            name="city"
            placeholder="City"
          />
          <input
            className="border p-2 rounded"
            type="text"
            name="state"
            placeholder="State"
          />
          <input
            className="border p-2 rounded"
            type="text"
            name="department"
            placeholder="Department"
          />
          <input
            className="border p-2 rounded"
            type="number"
            name="established_year"
            placeholder="Established Year (e.g. 2005)"
            min="1800"
            max={new Date().getFullYear()}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Add Hospital
          </button>
        </form>
      </div>
    </>
  );
};
