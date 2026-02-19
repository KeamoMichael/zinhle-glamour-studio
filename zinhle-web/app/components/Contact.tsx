const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Large decorative background text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <h2 className="text-[20rem] font-bold text-gray-300 font-gilda select-none">
                    Zinhle
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="text-4xl font-normal text-black mb-4 font-gilda">
                    Contact Us
                </h2>
                <p className="text-gray-700 mb-12 font-sora">
                    Zinhle Glamour Glamour Holdings
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Studio Address */}
                    <div className="bg-white p-8 border-t-4 border-raspberry shadow-sm">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="text-raspberry text-2xl">📍</div>
                            <h3 className="text-xl font-semibold text-black font-sora">Studio Address</h3>
                        </div>
                        <p className="text-gray-700 font-sora">
                            Umlazi G20, Amo Shopping<br />
                            Centre, DCA
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="bg-white p-8 border-t-4 border-raspberry shadow-sm">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="text-raspberry text-2xl">👤</div>
                            <h3 className="text-xl font-semibold text-black font-sora">Contact Details</h3>
                        </div>
                        <p className="text-gray-700 font-sora">
                            zinhleglamourstudio@gmail.com<br />
                            068 664 8111
                        </p>
                    </div>

                    {/* TikTok */}
                    <div className="bg-white p-8 border-t-4 border-raspberry shadow-sm">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="text-raspberry text-2xl">🎵</div>
                            <h3 className="text-xl font-semibold text-black font-sora">TikTok</h3>
                        </div>
                        <p className="text-gray-700 font-sora">
                            Hair by Zee | @zinahleG
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
