import icons from "../../assets/iconss.svg";
import css from "./BookForm.module.css";
import Calendar from "../Calendar/Calendar";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { formatDate } from "../../helpers/calendar";
import BookInput from "../MIU/BookInput/BookInput";
import LoadButton from "../MIU/LoadButton/LoadButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const isFutureDate = (date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(date) >= today;
};

const validationSchema = yup.object({
  email: yup.string().email("Enter a valid email address").required("Email is required"),
  name: yup.string().min(2, "Must be at least 2 characters long").max(25, "Must be no more than 25 characters").required("Name is required"),
  date: yup.string().test("is-future", "Date cannot be in the past", (value) => isFutureDate(value)).required("Date is required"),
});

const BookForm = () => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [date, setDate] = useState(null);
  const {
    control,
    handleSubmit,
    register,
    setValue,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = () => {
    toast.success("Booking successful!");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleSetDate = (selectedDate) => {
    setDate(selectedDate);
    setValue("date", formatDate(selectedDate));
    setError("date", null);
  };

  const renderCalendar = ({ field }) => (
    <BookInput
      value={date ? formatDate(date) : ""}
      field={field}
      type="text"
      placeholder="Booking date*"
      iconPath={`${icons}#icon-calendar`}
      style={{ cursor: "pointer", marginBottom: 0, pointerEvents: "none" }}
      error={errors.date}
    />
  );

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>Stay connected! We are always ready to help you.</p>
      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <BookInput
          register={register("name")}
          type="text"
          placeholder="Name*"
          error={errors.name}
        />
        <BookInput
          register={register("email")}
          type="text"
          placeholder="Email*"
          error={errors.email}
        />
        <div className={css.calenderWrapper} onClick={(e) => {
          e.stopPropagation();
          setIsCalendarOpen((prev) => !prev);
        }}>
          <Controller name="date" control={control} render={renderCalendar} />
          {isCalendarOpen && (
            <Calendar
              date={date}
              handleSetDate={handleSetDate}
              onClose={() => setIsCalendarOpen(false)}
            />
          )}
        </div>
        <textarea
          {...register("comment")}
          className={css.textarea}
          placeholder="Comment"
        />
        <LoadButton  type="submit"
  >
          Send
        </LoadButton>
      </form>
    </div>
  );
};

export default BookForm;
