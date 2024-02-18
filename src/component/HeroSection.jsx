import logo from "../../public/images/logo.png";

const HeroSection = () => {
  return (
    <section className='max-w-6xl mx-auto border-b-[1px] border-[#ffb545] pb-8'>
      <div className='pt-7 flex gap-8 items-center text-[#ffb545] px-11'>
        <img src={logo} className='w-96' />
        <div className='flex flex-col '>
          <div className='text-5xl font-bold mb-6'>
            Bhookh Lagi Hai Khud Se Bana Lo, Nahi Ho Rha Humse Manga Lo.
          </div>
          <button className='text-2xl font-bold bg-[#42130b] px-8 py-2 rounded-lg hover:bg-[#4f170e] '>
            Locate Yourself
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
