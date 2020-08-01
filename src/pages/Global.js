import React, { useState, useContext, useEffect, useLayerEffect, useRef } from 'react';
import { CountryContext } from '../contexts/CountryContext';
import { SearchContext }  from '../contexts/SearchContext';
import { FilterContext }  from '../contexts/FilterContext';
import Pagination         from '../components/Pagination';
import CountryLight       from '../components/CountryLight';
import {formatNumber}     from '../helpers';

const Global = () => {
  const countries  = useContext(CountryContext);
  const {search}   = useContext(SearchContext);
  const {filter}   = useContext(FilterContext);
  const isMounting = useRef(true);
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // content =
    // isset search ?
    if (typeof search.name !== undefined && !Array.isArray(search)) { setContent(search); }
    // or isset filter filter ?
    else if (filter.length > 0) { setContent(filter); }
    // default countries list
    else { setContent(countries); }
  }, [search, filter, countries])

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 25;
  const paginatedContent = Pagination.getData(
    content,
    currentPage,
    itemsPerPage
  );

  const CountryList = paginatedContent.map((country, index) => {
    return (
      <CountryLight
        key={index}
        flag={country.flag}
        name={country.name}
        capital={country.capital}
        region={country.region}
        population={formatNumber(country.population)}
      />)
  });

  return (
    <>
      {CountryList}
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        length={content.length}
        onPageChanged={handleChangePage}
      />
    </>
  );
}

export default Global;
