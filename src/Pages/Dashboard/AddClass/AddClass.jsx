import React from "react";
import { useForm } from "react-hook-form";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.status = "pending";
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-7 mt-10">Add Class</h1>
      <div className="bg-stone-300 w-3/4 mx-auto p-10 rounded-lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Class name"
            className="input input-bordered input-md w-full mt-5"
            {...register("name", { required: true })}
          />
          {errors.name && <p>Name field is required</p>}

          <input
            type="text"
            placeholder="Instructor name"
            defaultValue="Mehedi hassan"
            readOnly
            className="input input-bordered input-md w-full mt-5"
            {...register("instructorName")}
          />

          <input
            type="email"
            placeholder="Instructor email "
            defaultValue="mehedi@gmail.com"
            readOnly
            className="input input-bordered input-md w-full mt-5"
            {...register("instructorEmail")}
          />
          <input
            type="number"
            placeholder="Available seats"
            className="input input-bordered input-md w-full mt-5"
            {...register("availableSeats", { required: true })}
          />
          <input
            type="number"
            placeholder="Price"
            className="input input-bordered input-md w-full mt-5"
            {...register("price", { required: true })}
          />

          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered file-input-md w-full mt-5"
          />

          <input className="btn bg-red-700 text-white mt-5 text-center w-full" type="submit" value="Add class" />
        </form>
      </div>
    </div>
  );
};

export default AddClass;
