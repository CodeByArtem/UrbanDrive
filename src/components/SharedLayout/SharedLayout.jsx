import { Suspense } from "react";
import css from "./SharedLayout.module.css";

import Header from "../Header/Header";
import Loader from "../Loader/Loader";

const SharedLayout = ({ children }) => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};

export default SharedLayout;