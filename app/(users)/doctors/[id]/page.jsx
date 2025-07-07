import React from "react";
import { db } from "@/config/db";
import { Mail, Phone, MapPin, Calendar, Award, User } from "lucide-react";
import { notFound } from "next/navigation";

const SingleDoctor = async (props) => {
  const params = await props.params;
  console.log("prams: ", params);

  const [[doctor]] = await db.execute(
    `select * from doctors where doctor_id = ?`,
    [params.id]
  );
  console.log("🚀 ~ SingleDoctor ~ doctor:", doctor);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getInitials = (firstName, lastName) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  if (!doctor) return notFound();

  // if (!doctor) return <h1>Doctor not found</h1>;

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100  overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-xl font-bold">
              {getInitials(doctor.first_name, doctor.last_name)}
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                Dr. {doctor.first_name} {doctor.last_name}
              </h2>
              <p className="text-blue-100 text-sm">{doctor.specialization}</p>
              <div className="flex items-center mt-1">
                <div
                  className={`w-2 h-2 rounded-full mr-2 ${
                    doctor.is_active ? "bg-green-300" : "bg-red-300"
                  }`}
                ></div>
                <span className="text-xs">
                  {doctor.is_active ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-600">
              <Mail className="w-4 h-4 text-blue-500" />
              <span className="text-sm">{doctor.email}</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-600">
              <Phone className="w-4 h-4 text-green-500" />
              <span className="text-sm">{doctor.phone}</span>
            </div>
            <div className="flex items-start space-x-3 text-gray-600">
              <MapPin className="w-4 h-4 text-red-500 mt-0.5" />
              <div className="text-sm">
                <div>{doctor.address}</div>
                <div>
                  {doctor.city}, {doctor.state} {doctor.postal_code}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100"></div>

          {/* Professional Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-yellow-500" />
              <div>
                <div className="text-xs text-gray-500">Experience</div>
                <div className="text-sm font-medium">
                  {doctor.experience_years} years
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4 text-purple-500" />
              <div>
                <div className="text-xs text-gray-500">License</div>
                <div className="text-sm font-medium">
                  {doctor.license_number}
                </div>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-indigo-500" />
              <div>
                <div className="text-xs text-gray-500">Joined</div>
                <div className="text-sm font-medium">
                  {formatDate(doctor.joining_date)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-3">
          <div className="text-xs text-gray-500">
            ID: {doctor.doctor_id} • Born: {formatDate(doctor.date_of_birth)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDoctor;
