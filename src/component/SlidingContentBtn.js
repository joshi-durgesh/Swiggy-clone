const SlidingContentBtn = ({ section, side }) => {
  return (
    <button
      id={section + "-btn-" + side}
      className='bg-gray-200 w-9 h-9 rounded-full'
    >
      <span className={"bi bi-arrow-" + side}></span>
    </button>
  );
};

export default SlidingContentBtn;
