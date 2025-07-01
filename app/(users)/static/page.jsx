import { db } from "@/config/db.jsx";

const StaticPage = async () => {
  const [doctors] = await db.execute("select * from doctors");
  console.log(doctors);

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

export default StaticPage;
