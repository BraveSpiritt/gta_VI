import { useState } from "react";

import styles from "./Home.module.css";

interface IFormState {
  name: string;
  email: string;
}

function Home() {
  const [isSuccess, setIsSuccess] = useState(false);
  const onSubmit = (data: IFormState) => {
    console.log(data)
    setIsSuccess(!isSuccess);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <form onSubmit={() => onSubmit}>
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
              <button>Submit</button>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default Home;
