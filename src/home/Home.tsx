import { SyntheticEvent, useState } from "react";

import styles from "./Home.module.css";

interface IFormState {
  name: string;
  email: string;
}

function Home() {
  const [isSuccess, setIsSuccess] = useState(false);
  const onSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    setIsSuccess(!isSuccess);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <form >
          {isSuccess ? (
            <div className={styles.success}>Form is submitted !</div>
          ) : (
            <>
              <h1>GTA 6 - leave a request </h1>
              <input
                type="text"
                placeholder="Enter your name:"
              />
              <input
                type="email"
                placeholder="Enter your email:"
              />
              <button onClick={onSubmit}>Submit</button>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default Home;
