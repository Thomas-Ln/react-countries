import React, { useState, useContext, useEffect } from 'react';
import { CountryContext } from '../contexts/CountryContext';
import { SearchContext }  from '../contexts/SearchContext';
import { FilterContext }  from '../contexts/FilterContext';
import Pagination         from '../components/Pagination';
import CountryLight       from '../components/CountryLight';
import {formatNumber}     from '../helpers';

const Global = () => {
  const countries             = useContext(CountryContext);
  const {search, setSearch}   = useContext(SearchContext);
  const {filter, setFilter}   = useContext(FilterContext);
  const [content, setContent] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setSearch([]);
    setFilter([]);
  }, []);

  useEffect(() => {
    // content =
    // isset search ?
    if (search.length > 0) { setContent(search); }
    // or isset filter ?
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
