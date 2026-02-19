import Image from "next/image";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-normal text-raspberry mb-4 font-gilda">
          Our Services
        </h2>
        <p className="text-gray-700 mb-12 font-sora max-w-3xl">
          We provide a comprehensive suite of hair and beauty solutions meticulously designed to meet the diverse needs of our clients, delivered with
          an unwavering commitment to provide consistent quality.
        </p>

        {/* Signature Braiding Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-black mb-8 font-sora border-b-2 border-raspberry pb-2 inline-block">
            Signature Braiding
          </h3>

          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="relative h-80 overflow-hidden group">
              <Image
                src="/assets/Zee - Page 2.jpg"
                alt="Knotless Braids"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-raspberry via-raspberry/50 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-semibold mb-2 font-sora">Knotless Braids</h4>
                <p className="text-sm font-sora text-white/90">
                  Natural-looking braids with a seamless finish and lightweight feel for ultimate comfort.
                </p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden group">
              <Image
                src="/assets/Zee - Page 2.jpg"
                alt="Goddess Braids"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-raspberry via-raspberry/50 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-semibold mb-2 font-sora">Goddess Braids</h4>
                <p className="text-sm font-sora text-white/90">
                  Elegant, voluminous braids with bohemian accents, perfect for a regal and goddess-like appearance.
                </p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden group">
              <Image
                src="/assets/Zee - Page 2.jpg"
                alt="Straight Up"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-raspberry via-raspberry/50 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-semibold mb-2 font-sora">Straight Up</h4>
                <p className="text-sm font-sora text-white/90">
                  Classic straight back and up-do styles for a sleek, chic, and professional look.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-80 overflow-hidden group">
              <Image
                src="/assets/Zee - Page 3.jpg"
                alt="Straight Back"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-raspberry via-raspberry/50 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-semibold mb-2 font-sora">Straight Back</h4>
                <p className="text-sm font-sora text-white/90">
                  Traditional yet refined braiding styles that offer durability and timeless elegance.
                </p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden group">
              <Image
                src="/assets/Zee - Page 3.jpg"
                alt="Snoopy"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-raspberry via-raspberry/50 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-semibold mb-2 font-sora">Snoopy</h4>
                <p className="text-sm font-sora text-white/90">
                  Playful and intricate braiding patterns that showcase creativity and personality.
                </p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden group">
              <Image
                src="/assets/Zee - Page 3.jpg"
                alt="Sweet and Sour"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-raspberry via-raspberry/50 to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-2xl font-semibold mb-2 font-sora">Sweet and Sour</h4>
                <p className="text-sm font-sora text-white/90">
                  A unique blend of textures and styles that create a bold, modern statement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-80 overflow-hidden group">
            <Image
              src="/assets/Zee - Page 4.jpg"
              alt="Classic Braids"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-raspberry via-raspberry/50 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="text-2xl font-semibold mb-2 font-sora">Classic Braids</h4>
              <p className="text-sm font-sora text-white/90">
                Time-honored techniques that prioritize hair health and long-lasting style.
              </p>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden group">
            <Image
              src="/assets/Zee - Page 4.jpg"
              alt="Classic Eyelashes"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-raspberry via-raspberry/50 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="text-2xl font-semibold mb-2 font-sora">Classic Eyelashes</h4>
              <p className="text-sm font-sora text-white/90">
                Professional lash application that enhance the eyes with a natural or dramatic finish, tailored to your preference.
              </p>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden group">
            <Image
              src="/assets/Zee - Page 4.jpg"
              alt="Hair Wash & Treatment"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-raspberry via-raspberry/50 to-transparent opacity-80"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h4 className="text-2xl font-semibold mb-2 font-sora">Hair Wash & Treatment</h4>
              <p className="text-sm font-sora text-white/90">
                Deep cleansing and nourishing treatments to maintain hair health, vitality, and shine between styles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
