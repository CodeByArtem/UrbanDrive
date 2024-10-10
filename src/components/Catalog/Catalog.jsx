import { useDispatch, useSelector } from "react-redux"
import css from "./Catalog.module.css"
import { selectError, selectIsFetching, selectIsNextPage } from "../../redux/campers/selectors";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCampers, getMoreCampers } from "../../redux/campers/operations";
import { getSearchParams } from "../../helpers/searchParams";





const Catalog = () => {
    const dispatch = useDispatch();
    const campers = useSelector(selectIsFetching);
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
const isEmpty = campers?.length === 0 && !isLoading;
const isCalendar = !errorMessage && !!slicedDate.length;
const isButton = 
!isLoading &&
! errorMessage &&
(isNextPage || slicedDate.length !== campers?.length)

return(
<section className={css.container}>
{isCalendar && <CatalogList campers={slicedDate} />}
{errorMessage && <Message>{errorMessage}</Message>}
{isEmpty && <Message>Campers not found</Message>}
{isLoading && <Loader />}
{isButton && (
  <button className={css.button} type="button" onClick={handleLoadMore}>
    Load more
  </button>
)}
</section>
);
};

export default Catalog;












