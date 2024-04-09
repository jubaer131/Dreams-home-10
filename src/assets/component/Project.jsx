

const Project = ({ item }) => {
    const { image, location, name, facilities, description, price } = item
    console.log(item)
    return (
        <div className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">

            <div className="space-y-4">
                <div className="space-y-2">
                    <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="flex items-center text-xs">
                        <span>{location}</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold dark:text-violet-600">{name}</h3>
                    </a>
                    <p className="leading-snug dark:text-gray-600">{description.slice(0, 100)}</p>
                    <ul className="p-5">
                        {
                            facilities.map(item => <li className="list-disc">{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Project;