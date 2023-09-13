import useFetch from "../../Hooks/useFetch";


const LocationList = () => {
   const {data, isLoading} = useFetch("http://localhost:5000/hotels" , "");
   if(isLoading) <p>loading</p>
    return ( 
        <div className="nearbyLocation">
        <h2 className="text-2xl">نزدیکترین هتل به شما</h2>
        <div className="w-full grid grid-cols-12 gap-6">
          {data.map((item) => {
            return (
              <div className="locationItem bg-white p-2 rounded-lg col-span-12 md:col-span-4 lg:col-span-3" key={item.id}>
                <img src={item.picture_url.url} alt={item.name} />
                <div className="w-full flex flex-col items-center justify-evenly my-4">
                  <p className="name mb-4 text-xl">{item.name}</p>
                  <p className="locaiton mb-4 text-base text-gray-600 font-ShabnamFD text-center">{item.smart_location}</p>
                  <p className="text-gray-500 font-ShabnamFD text-sm mb-4">شروع قیمت برای ۱ شب</p>
                  <p className="flex justify-center items-center gap-2">
                     <strong>{item.price.toLocaleString("fa-IR")}</strong> 
                    <span className="text-gray-600 font-Shabnam">تومان</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
     );
}
 
export default LocationList;