

const Service = ({ item }) => {

    const { title, image, description, details_button } = item
    console.log(item)
    return (
        <div >
            <article className="flex flex-col dark:bg-gray-50">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={image} />
                </a>
                <div className="flex flex-col flex-1 p-6">
                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                    <a rel="noopener noreferrer" href="#" className="text-[18px] font-bold tracking-wider uppercase hover:underline dark:text-violet-600">{title}</a>
                    <h3 className="flex-1 py-2 text-[16px] font-medium leading-snug">{description.slice(0, 150)}</h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                        <span className="btn">{details_button.text}</span>

                    </div>
                </div>
            </article>

        </div>
    );
};

export default Service;