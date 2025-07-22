import { db } from "@/config/db";
import { createHospitalAction } from "./hospital.action";

const HospitalForm = async () => {
  const [hospitalsData] = await db.execute(`select * from hospital`);
  //   console.log(hospitalsData);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        🏥 Add New Hospital
      </h2>
      <form
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 bg-black shadow p-6 rounded-xl "
        action={createHospitalAction}
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

      {/* Table of Records */}
      {hospitalsData.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">📋 Hospital Records</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-2 px-4">#ID</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">City</th>
                  <th className="py-2 px-4">State</th>
                  <th className="py-2 px-4">Department</th>
                  <th className="py-2 px-4">Established</th>
                </tr>
              </thead>
              <tbody>
                {hospitalsData.map((hospital) => (
                  <tr
                    key={hospital.hospital_id}
                    className="border-t hover:bg-gray-50 transition text-black"
                  >
                    <td className="py-2 px-4">{hospital.hospital_id}</td>
                    <td className="py-2 px-4">{hospital.name}</td>
                    <td className="py-2 px-4">{hospital.city}</td>
                    <td className="py-2 px-4">{hospital.state}</td>
                    <td className="py-2 px-4">{hospital.department}</td>
                    <td className="py-2 px-4">{hospital.established_year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalForm;
