import { db } from "@/config/db";
import { HospitalForm } from "./HospitalForm";
// import { createHospitalAction } from "./hospital.action";

const HospitalPage = async () => {
  const [hospitalsData] = await db.execute(`select * from hospital`);
  //   console.log(hospitalsData);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <HospitalForm />

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

export default HospitalPage;
