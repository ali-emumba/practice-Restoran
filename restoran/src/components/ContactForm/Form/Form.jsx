import { Modal } from "antd";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const confirmation = () => {
    // console.log("clicked");
    const modal = Modal.success({
      title: "Reservation Successful",
      content: `name: ${getValues("name")}, message: ${getValues("message")}`,
    });
    setTimeout(() => modal.destroy(), 7000);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const onSubmit = (e, data) => {
    // e.preventdefault();
    console.log(data);
  };

  const areRequiredFieldsFilled = () =>
    !!(
      getValues("name") &&
      getValues("email") &&
      getValues("subject") &&
      getValues("message")
    );

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
        <div className={styles.full__width}>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className={styles.inputs}
            aria-invalid={errors.subject ? "true" : "false"}
            {...register("subject", {
              required: "Subject is required",
              pattern: {
                value: /^[A-Za-z -]+$/,
                message: "Only alphabets, spaces, and hyphens are allowed",
              },
              maxLength: {
                value: 100,
                message: "Subject must not exceed 100 characters",
              },
            })}
          />
          {errors.subject && (
            <p className={styles.form__error_msg}>{errors.subject.message}</p>
          )}
        </div>
        <div className={styles.full__width}>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Message"
            className={styles.textarea}
            aria-invalid={errors.message ? "true" : "false"}
            {...register("message", {
              required: "message is required",
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
          <button
            type="submit"
            className={styles.form__submit__btn}
            onClick={() =>
              !!(Object.keys(errors).length === 0 && areRequiredFieldsFilled())
                ? confirmation()
                : null
            }
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
