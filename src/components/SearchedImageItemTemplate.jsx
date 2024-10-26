const SearchedImageItemTemplate = ({ data }) => {
    return (
        <div className="group flex flex-col py-3 cursor-pointer"
            onClick={(() => window.open(data.image.contextLink))}
        >
            <div className="rounded-xl overflow-hidden bg-black/[0.03] h-[100px] md:h-[120px] xl:h-[140px] group-hover:shadow-c ">
                <img src={data.link} className="h-full w-full object-contain" />
            </div>
            <div className="text-xs pt-2 text-[#70757a] hover:text-blue-500">
                {data.displayLink}
            </div>
            <div className="text-sm text-[#3c4043] truncate pt-1 group-hover:underline">
                {data.title}
            </div>
        </div>
    )
};

export default SearchedImageItemTemplate;
