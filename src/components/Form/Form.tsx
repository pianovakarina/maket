import React from "react";
import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";

const Form = () => {
  const formErrorText: Record<string, string> = {
    required: "* This field must be filled",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });
  // console.log({ errors });
  const handleClick = () => {
    reset();
  };
  return (
    <form
      noValidate
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <div className={styles.row}>
        <div className={styles.inputRow}>
          <input
            className={styles.input}
            {...register("firstName", { required: true })}
            placeholder="First Name"
          />
          {errors.firstName && (
            <p className={styles.txt}>{formErrorText[errors.firstName.type]}</p>
          )}
        </div>
        <div className={styles.inputRow}>
          <input
            className={styles.input}
            {...register("lastName", { required: true, minLength: 4 })}
            placeholder="Last Name"
          />
          {errors.lastName && (
            <p className={styles.txt}>{formErrorText[errors.lastName.type]}</p>
          )}
        </div>
      </div>
      <div className={styles.inputRow}>
        <input
          className={styles.inp}
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && (
          <p className={styles.txt}>{formErrorText[errors.email.type]}</p>
        )}
      </div>

      <button onClick={handleClick} className={styles.btn}>
        Subscribe
      </button>
    </form>
  );
};

export { Form };
