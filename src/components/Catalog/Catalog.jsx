import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import css from "./Catalog.module.css";
import { useSearchParams } from "react-router-dom";
import { selectCampers, selectError, selectIsFetching, selectIsNextPage } from "../../redux/campers/selectors";
import { getSearchParams } from "../../helpers/searchParams";
import { getCampers, getMoreCampers } from "../../redux/campers/operations";
import CatalogList from "../CatalogList/CatalogList";
import Message from "../MIU/Message/Message";
import Loader from "../Loader/Loader";


const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const isFetchingData = useSelector(selectIsFetching);
  const errorMessage = useSelector(selectError);
  const isNextPage = useSelector(selectIsNextPage);

  const [page, setPage] = useState(1);
  const [isLoading, setIsLoadingFirst] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const params = getSearchParams(searchParams);
    setPage(1);
    setIsLoadingFirst(true);
    dispatch(getCampers({ page: 1, limit: 8, ...params })).then(() => {
      setIsLoadingFirst(false);
    });
  }, [dispatch, searchParams]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    const params = getSearchParams(searchParams);
    setIsLoadingFirst(isFetchingData);
    dispatch(getMoreCampers({ page: nextPage + 1, ...params })).then(() => {
      setIsLoadingFirst(false);
    });
    setPage(nextPage);
  };
  const slicedDate = campers ? campers.slice(0, 4 * page) : [];


  const isShowCalendar = !errorMessage && !!slicedDate.length;
  const isShowButton =
    !isLoading &&
    !errorMessage &&
    (isNextPage || slicedDate.length !== campers?.length);

  return (
    <section className={css.container}>
      {isShowCalendar && <CatalogList campers={slicedDate} />}
      {errorMessage && <Message>{errorMessage}</Message>}
   
      {isLoading && <Loader />}
      {isShowButton && (
        <button className={css.button} type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </section>
  );
};

export default Catalog;
