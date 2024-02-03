const SlidingContentBtn = ({ section, side }) => {
  return (
    <button id={section + "-btn-" + side} className={"btn-arrow btn-" + side}>
      <span className={"bi bi-arrow-" + side}></span>
    </button>
  );
};

export default SlidingContentBtn;
