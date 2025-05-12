

const Banner = () => {
    return (
        <div className="relative my-5 ">
            
            <img 
                src="/C002-assets/banner-img-1.png" 
                alt="Banner" 
                className="w-full h-auto object-cover rounded-2xl" 
            />

            
            <div className="absolute top-0 left-0 right-0 bottom-0  bg-opacity-50 flex justify-center items-center text-center text-white p-8">
                <div className="px-30">
                    <h1 className="text-5xl font-bold mb-4">
                        It avoids subjective claims or exaggeration that might raise red flags legally
                    </h1>
                    <p className="text-gray-300">
                        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. 
                        Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;

