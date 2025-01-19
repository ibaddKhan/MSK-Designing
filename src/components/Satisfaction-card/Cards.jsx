import React from "react";

const stats = [
    { title: "Creative Designs", value: "3,680+" },
    { title: "Satisfied Clients", value: "1,358+" },
    { title: "Orders Delivered", value: "2,389+" },
    { title: "Product Designs", value: "5,404+" },
];

const CardSection = () => {
    return (
        <div className="bg-[#171717] text-white py-16">
            <h2 className="text-3xl font-bold text-center mb-12">
                SOME WORK ABOUT US
                <br />
                <span className="text-yellow-500 text-5xl">WE PROUD OF OUR WORK</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-16">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-[#282828] text-center py-8 px-6 rounded-lg shadow-lg"
                    >
                        <p className="text-4xl font-bold text-yellow-500">{stat.value}</p>
                        <p className="text-xl font-medium mt-4">{stat.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSection;
