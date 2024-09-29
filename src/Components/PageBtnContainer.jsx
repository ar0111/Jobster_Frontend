import React, { useContext, useState } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import './PageBtnContainer.css';
import { AuthContext } from '../Context/AuthProvider';

const PageBtnContainer = ({numbers, nPage}) => {   
    const {currentPage, setCurrentPage} = useContext(AuthContext); 

    const nextPage = ()=>{
        setCurrentPage(currentPage + 1);
        console.log(currentPage);
        
    }

    const prevPage = ()=>{
        setCurrentPage(currentPage - 1);
    }

    const changePage = (pageNumber)=>{
        setCurrentPage(pageNumber);
    }

    return (
        <div className='flex justify-normal items-center mt-8'>
            <button type="button" className='btn bg-white rounded text-sky-600' onClick={prevPage} disabled={currentPage === 1}>
                <HiChevronDoubleLeft></HiChevronDoubleLeft>
                Prev
            </button>
            <div className=' bg-sky-200 rounded text-center mx-6'>
                {
                    numbers.map((pageNumber) =>{
                        // console.log(pageNumber);
                        return (
                            <button className={`w-14 h-12 text-sky-600 text-base font-bold ${currentPage === pageNumber ? 'active1 rounded' : ''}`} onClick={()=>changePage(pageNumber)}>
                            {pageNumber}
                            </button>
                        )
                    })
                }
            </div>
            
            <button type="button" className='btn bg-white rounded text-sky-600' onClick={nextPage} disabled={currentPage === nPage}>
                <HiChevronDoubleRight></HiChevronDoubleRight>
                Next
            </button>
        </div>
    );
};

export default PageBtnContainer;