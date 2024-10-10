import { Suspense } from "react";
import css from "./SharedLayout.module.css";
import Header from "../Header/Header";
import PageLoader from "../MIU/PageLoader/PageLoader";


const SharedLayout = ({ children }) => {
  return (
    <div className={css.container}>
      <Header />
      <Suspense fallback={<PageLoader />}>{children}</Suspense>
    </div>
  );
};

export default SharedLayout;