import Image from "next/image";

const Maintenance = () => {
    return (
        <section id="maintenance" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-normal text-raspberry mb-4 font-gilda">
                    Maintenance & Care
                </h2>
                <p className="text-gray-700 mb-12 font-sora max-w-3xl">
                    Gentle, professional maintenance and care services designed to preserve hair health, maintain neatness, and extend the life of
                    every style through consistent upkeep, expert attention, and trusted salon techniques.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Scalp Care */}
                    <div className="bg-white p-6 border-l-4 border-raspberry">
                        <h3 className="text-xl font-semibold text-black mb-3 font-sora">Scalp Care</h3>
                        <p className="text-gray-700 font-sora text-sm">
                            Specialized treatments to promote a healthy scalp environment, essential for hair growth and comfort during braiding.
                        </p>
                    </div>

                    {/* Style Maintenance */}
                    <div className="bg-white p-6 border-l-4 border-raspberry">
                        <h3 className="text-xl font-semibold text-black mb-3 font-sora">Style Maintenance</h3>
                        <p className="text-gray-700 font-sora text-sm">
                            Professional services and expert advice to extend the life of your braids and maintain a fresh, salon-quality look.
                        </p>
                    </div>

                    {/* Retail Selection */}
                    <div className="bg-white p-6 border-l-4 border-raspberry">
                        <h3 className="text-xl font-semibold text-black mb-3 font-sora">Retail Selection</h3>
                        <p className="text-gray-700 font-sora text-sm">
                            A curated collection of premium hair and beauty products available for purchase to support your home maintenance routine.
                        </p>
                    </div>
                </div>

                {/* Consultation Feature Card */}
                <div className="relative h-96 overflow-hidden group mt-8">
                    <Image
                        src="/assets/Zee - Page 5.jpg"
                        alt="Consultation Service"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-raspberry via-raspberry/70 to-transparent opacity-90"></div>
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-xl p-12 text-white">
                            <h3 className="text-3xl font-semibold mb-4 font-sora">Consultation</h3>
                            <p className="text-lg font-sora text-white/95 leading-relaxed">
                                Personalized consultations to determine the best styles, treatments, and care plans for your unique needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Maintenance;
