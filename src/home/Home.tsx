import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

import styles from "./Home.module.css";

interface IFormState {
  name: string;
  email: string;
}

function Home() {
  const { register, handleSubmit } = useForm<IFormState>();
  const [isSuccess, setIsSuccess] = useState(false);
  const onSubmit: SubmitHandler<IFormState> = (data: IFormState) => {
    console.log(data)
    setIsSuccess(!isSuccess);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {isSuccess ? (
            <div className={styles.success}>Form is submitted !</div>
          ) : (
            <>
              <h1>GTA 6 - leave a request </h1>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter your name:"
              />
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email:"
              />
              <button>Submit</button>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default Home;
