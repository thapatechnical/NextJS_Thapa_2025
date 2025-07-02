import { db } from "@/config/db.jsx";

export const dynamic = "force-dynamic";

const DynamicPage = async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log("Dynamic doctors");

  return (
    <>
      <ul>
        {doctors.map((doctor) => {
          return <li key={doctor.doctor_id}> {doctor.first_name} </li>;
        })}
      </ul>
    </>
  );
};

export default DynamicPage;
