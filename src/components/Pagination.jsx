import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useParams, useNavigate } from "react-router-dom";

import Logo from "../assets/google-pagination-logo.png";
import { pagination } from "../utils/Constants";

const Pagination = ({ queries }) => {
    const { query } = useParams()
    const [page, setPage] = useState(pagination[0].startIndex)
    const navigate = useNavigate();

    useEffect(() => {
        setPage(pagination[0].startIndex)
    }, [query])


    const paginationClickHandler = (startIndex) => {
        setPage(startIndex)
        navigate(`/${query}/${startIndex}`)
    }

    return <div className="flex flex-col items-center py-14 max-w-[700px]">
        <div className="relative text-[#4285f4]">
            {queries.previousPage && (
                <div className="absolute left-[-30px] md:left-[-40px] top-[10px]"
                    onClick={() => paginationClickHandler(queries.previousPage[0].startIndex)}
                >
                    <FiChevronLeft size={20} className="cursor-pointer" />
                    <div className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
                        Prev
                    </div>
                </div>
            )}
            <img className="w-[250px] md:w-[300px] " src={Logo} />
            {queries.nextPage && (
                <div className="absolute right-[-30px] md:right-[-40px] top-[10px]"
                    onClick={() => paginationClickHandler(queries.nextPage[0].startIndex)}
                >
                    <FiChevronRight size={20} className="cursor-pointer" />
                    <div className="cursor-pointer absolute left-[-5px] top-[30px] hidden md:block">
                        Next
                    </div>
                </div>
            )}
        </div>
        <div className="flex gap-3 text-sm text-[#4285f4]">
            {pagination.map((p) => (
                <span key={p.page} onClick={() => paginationClickHandler(p.startIndex)}
                    className={`cursor-pointer ${page === p.startIndex ? "text-black text-base" : ""}`}>{p.page}</span>
            ))}
        </div>
    </div>;
};

export default Pagination;
