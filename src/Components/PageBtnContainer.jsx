import React, { useState } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import './PageBtnContainer.css';

const PageBtnContainer = ({numbers, firstIndex, lastIndex, currentPage, SetCurrentPage}) => {
    // console.log(`current page ${currentPage}`);
    

    const nextPage = ()=>{
        if(currentPage !== lastIndex) {
            SetCurrentPage(currentPage + 1);
        }
        // console.log(currentPage);
        
    }

    const prevPage = ()=>{
        if(currentPage !== firstIndex) {
            SetCurrentPage(currentPage - 1);
        }
    }

    const changePage = (pageNumber)=>{
        SetCurrentPage(pageNumber);
    }

    return (
        <div className='flex justify-normal items-center mt-8'>
            <button type="button" className='btn bg-white rounded text-sky-600' onClick={prevPage}>
                <HiChevronDoubleLeft></HiChevronDoubleLeft>
                Prev
            </button>
            <div className=' bg-sky-200 rounded text-center mx-6'>
                {
                    numbers.map((pageNumber) =>{
                        // console.log(pageNumber);
                        return (
                            <button className={`w-14 h-12 text-sky-600 text-base font-bold ${currentPage === pageNumber ? 'active rounded' : ''}`} onClick={()=>changePage(pageNumber)}>
                            {pageNumber}
                            </button>
                        )
                    })
                }
            </div>
            
            <button type="button" className='btn bg-white rounded text-sky-600' onClick={nextPage}>
                <HiChevronDoubleRight></HiChevronDoubleRight>
                Next
            </button>
        </div>
    );
};

export default PageBtnContainer;