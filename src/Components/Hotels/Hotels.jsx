import { Link } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { useHotels } from "../../Context/HotelsProvider";

const Hotels = () => {
 const {isLoading , hotels} = useHotels();
  if (isLoading) <Spinner color="indigo" />;
  return (
    <section className="">
      <h2 className="text-lg font-bold">نتایج جستجو: {hotels.length}</h2>
      {hotels.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
          >
            <div className="w-full flex my-3 border border-gray-200 rounded-lg">
              <img src={item.picture_url.url} alt={item.name} className="rounded-tr-lg rounded-br-lg ml-3"/>
              <div className="flex flex-col justify-evenly">
                <p className="font-Morabba text-lg">{item.name}</p>
                <p className="pl-2">{item.smart_location}</p>
                <p className="text-gray-500 font-ShabnamFD text-sm">
                  شروع قیمت برای ۱ شب
                </p>
                <p className="flex items-center gap-2">
                  <strong>{item.price.toLocaleString("fa-IR")}</strong>
                  <span className="text-gray-600 font-Shabnam">تومان</span>
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Hotels;
