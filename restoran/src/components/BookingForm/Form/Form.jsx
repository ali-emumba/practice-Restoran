import { faL } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (e, data) => {
    // e.preventdefault();
    console.log(data);
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={styles.inputs}
            aria-invalid={errors.name ? "true" : "false"}
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z -]+$/,
                message: "Only alphabets, spaces, and hyphens are allowed",
              },
              maxLength: {
                value: 50,
                message: "Name must not exceed 50 characters",
              },
            })}
          />
          {errors.name && (
            <p className={styles.form__error_msg}>{errors.name.message}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Your Email"
            aria-invalid={errors.email ? "true" : "false"}
            className={styles.inputs}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className={styles.form__error_msg}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <input
            type="text"
            name="date&time"
            placeholder="Date & Time"
            onfocus="(this.type='date')"
            onblur="if(this.value==''){this.type='text'}"
            className={styles.inputs}
            aria-invalid={errors.date ? "true" : "false"}
            {...register("date", {
              required: "Date & Time is required",
            })}
          />
          {errors.date && (
            <p className={styles.form__error_msg}>{errors.date.message}</p>
          )}
        </div>
        <div>
          <select
            id="numberOfPeople"
            name="numberOfPeople"
            className={styles.inputs}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className={styles.full__width}>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Special Request"
            className={styles.textarea}
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", {
              required: false,
              pattern: {
                value: /^[A-Za-z -]+$/,
                message: "Only alphabets, spaces, and hyphens are allowed",
              },
              maxLength: {
                value: 250,
                message: "message must not exceed 250 characters",
              },
            })}
          />
          {errors.message && (
            <p className={styles.form__error_msg}>{errors.message.message}</p>
          )}
        </div>
        <div className={styles.full__width}>
          <button type="submit" className={styles.form__submit__btn}>
            BOOK NOW
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;