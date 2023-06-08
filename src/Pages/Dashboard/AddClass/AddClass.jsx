import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useToast from "../../../Hooks/useToast";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // setLoading(true);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(
      `https://api.imgbb.com/1/upload?key=132b873aeba0a9d4de363955fe04a522`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.display_url;
          data.enroll = 0;
          data.status = "pending";
          data.image = image
          axiosSecure
            .post("/addClass", data)
            .then((result) => {
              useToast("success", result.data.message);
            })
            .catch((error) => {
              useToast("error", error);
            });
        }
      })
      .catch((error) => {
        useToast("error", error);
      });
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
            defaultValue={user?.displayName}
            readOnly
            className="input input-bordered input-md w-full mt-5"
            {...register("instructorName")}
          />

          <input
            type="email"
            placeholder="Instructor email "
            defaultValue={user?.email}
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

          <input
            className="btn bg-red-700 text-white mt-5 text-center w-full"
            type="submit"
            value="Add class"
          />
        </form>
      </div>
    </div>
  );
};

export default AddClass;
