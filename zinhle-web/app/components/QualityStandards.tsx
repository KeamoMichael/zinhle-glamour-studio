import Image from "next/image";

const QualityStandards = () => {
    return (
        <section id="quality" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-normal text-raspberry mb-4 font-gilda">
                    Quality Standards
                </h2>
                <p className="text-gray-700 mb-12 font-sora max-w-3xl">
                    We uphold consistent quality through professional techniques, careful attention to detail, and trusted standards across every service we deliver,
                    ensuring each client receives reliable care, lasting results, and a refined salon experience they can trust.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Hygiene & Safety */}
                    <div className="bg-gray-50 p-6 border-l-4 border-raspberry">
                        <h3 className="text-lg font-semibold text-black mb-3 font-sora">Hygiene & Safety</h3>
                        <p className="text-gray-700 font-sora text-sm">
                            We maintain a zero-tolerance policy towards unhygienic practices, ensuring a clean and sanitized environment for every client.
                        </p>
                    </div>

                    {/* Premium Materials */}
                    <div className="bg-gray-50 p-6 border-l-4 border-raspberry">
                        <h3 className="text-lg font-semibold text-black mb-3 font-sora">Premium Materials</h3>
                        <p className="text-gray-700 font-sora text-sm">
                            Only the highest quality hair extensions and beauty products are used for lasting results and hair health.
                        </p>
                    </div>

                    {/* Continuous Training */}
                    <div className="bg-gray-50 p-6 border-l-4 border-raspberry">
                        <h3 className="text-lg font-semibold text-black mb-3 font-sora">Continuous Training</h3>
                        <p className="text-gray-700 font-sora text-sm">
                            Professional services and expert advice to extend the life of your braids and maintain a fresh, salon-quality look.
                        </p>
                    </div>

                    {/* Client Satisfaction */}
                    <div className="bg-gray-50 p-6 border-l-4 border-raspberry">
                        <h3 className="text-lg font-semibold text-black mb-3 font-sora">Client Satisfaction</h3>
                        <p className="text-gray-700 font-sora text-sm">
                            A dedicated focus on delivering a personalized service that exceeds expectations and celebrates individual beauty.
                        </p>
                    </div>
                </div>

                {/* Images Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative h-80 overflow-hidden group">
                        <Image
                            src="/assets/Zee - Page 6.jpg"
                            alt="Quality standards in action"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-raspberry/60 to-transparent opacity-70"></div>
                    </div>

                    <div className="relative h-80 overflow-hidden group">
                        <Image
                            src="/assets/Zee - Page 6.jpg"
                            alt="Client satisfaction"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QualityStandards;
