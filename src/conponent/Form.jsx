import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setTableData } from "../context/tableSlice.js";
import Input from "./Input.jsx";
import { useRef } from "react";
import Button from "./Button.jsx";
import mockdata from "../database/mock_data.json";
import { phoneValidation } from "../lib/validatePhoneNumber.js";
import DisplayFormData from "../lib/displayFormData.jsx";

const Form = () => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    dispatch(setTableData(formData));
    mockdata.push(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <Input
              placeholder={"Name"}
              type="text"
              label="Name"
              ref={ref}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-400">{errors.name.message}</span>
            )}
          </div>
          <div>
            <Input
              placeholder={"Email"}
              type="text"
              label="Email"
              ref={ref}
              {...register("email", {
                required: "Email is required",

                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-400">{errors.email.message}</span>
            )}
          </div>
          <div>
            <Input
              placeholder={"Phone Number"}
              type="text"
              label="Phone Number"
              ref={ref}
              {...register("phone_number", {
                required: "Phone number is required",
                validate: phoneValidation,
                pattern: {
                  message: "Enter valid phone number",
                },
              })}
            />
            {errors.phone_number && (
              <span className="text-red-400">
                {errors.phone_number.message}
              </span>
            )}
          </div>
          <div>
            <Input
              placeholder={"Website"}
              type="url"
              label="Website"
              ref={ref}
              {...register("website", {
                required: "Website url is required",
                pattern: {
                  value:
                    /^(https:\/\/)(www\.)?([a-zA-Z0-9-]+)(\.[a-zA-Z]{2,})+$/,
                  message: "Invalid website url",
                },
              })}
            />
            {errors.website && (
              <span className="text-red-400">{errors.website.message}</span>
            )}
          </div>
          <div>
            <Input
              placeholder={"Industry Name"}
              type="text"
              label="Industry"
              ref={ref}
              {...register("industry", {
                required: "Industry name is required",
              })}
            />
            {errors.industry && (
              <span className="text-red-400">{errors.industry.message}</span>
            )}
          </div>
          <div className="flex gap-10 items-center border border-gray-200 rounded-lg w-auto mt-8 h-16">
            <label
              htmlFor="remember"
              className="ms-2  text-gray-900 font-bold text-base"
            >
              Account Status
            </label>
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                {...register("account_status", { required: false })}
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div>
            <Input
              placeholder={"Remark"}
              type="text"
              label="Remark"
              ref={ref}
              {...register("remark", { required: false })}
            />
          </div>
        </div>
        <div className="mb-6">
          <div>
            <Input
              placeholder={"Date"}
              type="date"
              label="Date"
              ref={ref}
              {...register("date", {
                required: "Date is required",
              })}
            />
            {errors.date && (
              <span className="text-red-400">{errors.date.message}</span>
            )}
          </div>
        </div>

        <Button type="submit" text="Submit" />
      </form>
      <DisplayFormData />
    </>
  );
};

export default Form;
