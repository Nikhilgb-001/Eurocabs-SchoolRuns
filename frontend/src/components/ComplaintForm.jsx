import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";

const ComplaintForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="p-3">
      <div className="max-w-xl mx-auto p-10 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Complaint Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Name
            </label>
            <Input
              type="text"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Email
            </label>
            <Input
              type="email"
              {...register("email", { required: true })}
              placeholder="Your Email"
              className="w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          {/* Date Of Journey */}
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Date Of Journey
            </label>
            <Input
              type="date"
              {...register("dateOfJourney", { required: true })}
              className="w-full"
            />
            {errors.dateOfJourney && (
              <p className="text-red-500 text-sm">
                Date of journey is required
              </p>
            )}
          </div>

          {/* Phone Number Used For Booking */}
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Phone Number Used For Booking
            </label>
            <Input
              type="tel"
              {...register("phoneNumber", { required: true })}
              placeholder="Phone Number"
              className="w-full"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">Phone number is required</p>
            )}
          </div>

          {/* Pickup Address */}
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Enter The PickUp Address
            </label>
            <Input
              type="text"
              {...register("pickupAddress", { required: true })}
              placeholder="PickUp Address"
              className="w-full"
            />
            {errors.pickupAddress && (
              <p className="text-red-500 text-sm">PickUp Address is required</p>
            )}
          </div>

          {/* Drop Address */}
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Enter The Drop Address
            </label>
            <Input
              type="text"
              {...register("dropAddress", { required: true })}
              placeholder="Drop Address"
              className="w-full"
            />
            {errors.dropAddress && (
              <p className="text-red-500 text-sm">Drop Address is required</p>
            )}
          </div>

          {/* Complaint Regarding */}
          <div>
            <label className="block text-sm font-medium text-gray-200">
              What was the Complaint Regarding
            </label>
            <Input
              type="text"
              {...register("complaintRegarding", { required: true })}
              placeholder="Complaint Topic"
              className="w-full"
            />
            {errors.complaintRegarding && (
              <p className="text-red-500 text-sm">Complaint is required</p>
            )}
          </div>

          {/* Further Description */}
          <div>
            <label className="block text-sm font-medium text-gray-200">
              Further Description on the Complaint
            </label>
            <textarea
              {...register("complaintDescription", { required: true })}
              placeholder="Description of the Complaint"
              className="w-full h-32 p-2 border border-gray-300 bg-inherit rounded-md focus:ring-2 focus:ring-indigo-500"
            />
            {errors.complaintDescription && (
              <p className="text-red-500 text-sm">Description is required</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-all"
            >
              Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
