import { Suspense } from "react";
import DataCard from "./DataCard";
import Load from "./Load";

const DataFetchServer = async (props) => {
  const searchParams = await props.searchParams;
  const userName = searchParams.name;

  // Handle case where no name is provided
  if (!userName) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              No Name Provided
            </h1>
            <p className="text-gray-600">
              Please add ?name=yourname to the URL
            </p>
          </div>
        </div>
      </div>
    );
  }

  //   console.log("Random :", Math.random());

  return (
    <div className="grid grid-cols-2 gap-3 h-full ">
      <div className="h-full flex justify-center items-center ">
        <h2>
          Hii I am 1st component.In Loading.jsx I have to wait but in Suspense I
          don't. I support partial rendering. This means you can show a fallback
          UI (like a loading spinner or skeleton) for specific components while
          the rest of your application renders and remains interactive.
        </h2>
      </div>
      <Suspense fallback={<Load />}>
        <DataCard userName={userName} />
      </Suspense>
    </div>
  );
};

export default DataFetchServer;
