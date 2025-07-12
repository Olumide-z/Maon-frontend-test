"use client";

import { useGetNews } from "@/hooks/useGetNews";
import React, { useState } from "react";
import NewsCard from "./NewsCard";
import { NewsTypes } from "@/types";
import NewsCardSkeleton from "../loaders/NewsCardSkeleton";
import ReactPaginate from "react-paginate";

const ITEMS_PER_PAGE = 12;

const News = () => {
  const { data: newsData, isLoading, error } = useGetNews();
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil((newsData?.length || 0) / ITEMS_PER_PAGE);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  const paginatedData = newsData?.slice(
    currentPage * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <div>
      <h3 className="text-white font-medium text-[1.8rem] leading-7 uppercase md:pl-4 pl-0">
        News
      </h3>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-5">
        {isLoading
          ? Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
              <NewsCardSkeleton key={idx} />
            ))
          : paginatedData?.map((news: NewsTypes) => (
              <NewsCard news={news} key={news?.id} />
            ))}
      </div>

      {error && (
        <p className="text-red-500 mt-4">Something went wrong. Please try again later.</p>
      )}

      {!isLoading && pageCount > 1 && (
        <div className="flex justify-center py-6">
          <ReactPaginate
            previousLabel="←"
            nextLabel="→"
            breakLabel="..."
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            activeClassName="active"
          />
        </div>
      )}
    </div>
  );
};

export default News;
