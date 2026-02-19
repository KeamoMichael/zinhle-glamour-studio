import Image from "next/image";

const Company = () => {
    return (
        <section id="company" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-normal text-raspberry mb-8 font-gilda">
                    Our Company
                </h2>

                <p className="text-gray-700 mb-12 font-sora leading-relaxed">
                    Zinhle Glamour Studio was established with a vision to redefine the beauty experience for the modern woman. As a 100% female-owned business,
                    we pride ourselves on our dedication to excellence, authenticity, and the empowerment of our clientele through superior artistry.
                </p>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Our Vision */}
                    <div>
                        <h3 className="text-2xl font-semibold text-black mb-6 font-sora border-b-2 border-raspberry pb-2 inline-block">
                            Our Vision
                        </h3>
                        <ul className="space-y-4 font-sora text-gray-700">
                            <li className="flex gap-3">
                                <span className="text-raspberry mt-1">•</span>
                                <span>To be the leading sanctuary of beauty and empowerment, setting global standards for timeless and elegant hairstyles.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-raspberry mt-1">•</span>
                                <span>To inspire confidence and celebrate the beauty of every individual through innovative artistry.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-raspberry mt-1">•</span>
                                <span>To pursue effortless self-expression while delivering consistent excellence through care-driven services and elevated experiences.</span>
                            </li>
                        </ul>
                    </div>

                    {/* Our Mission */}
                    <div>
                        <h3 className="text-2xl font-semibold text-black mb-6 font-sora border-b-2 border-raspberry pb-2 inline-block">
                            Our Mission
                        </h3>
                        <ul className="space-y-4 font-sora text-gray-700">
                            <li className="flex gap-3">
                                <span className="text-raspberry mt-1">•</span>
                                <span>To provide exceptional hair and beauty services delivered with precision and passion.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-raspberry mt-1">•</span>
                                <span>To create a luxurious and welcoming environment where every client feels valued and transformed.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-raspberry mt-1">•</span>
                                <span>To continually embrace techniques to remain at the forefront of the beauty industry.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Gallery Images */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                            src="/assets/Zee - Page 1.jpg"
                            alt="Salon work"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                            src="/assets/Zee - Page 2.jpg"
                            alt="Braiding service"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                            src="/assets/Zee - Page 3.jpg"
                            alt="Hair styling"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                            src="/assets/Zee - Page 4.jpg"
                            alt="Beauty services"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Company;
