const SlidingContentBtn = ({ side }) => {
  return (
    <button id={"banner-btn-" + side} className={"btn-arrow btn-" + side}>
      <span className={"bi bi-arrow-" + side}></span>
    </button>
  );
};

export default SlidingContentBtn;
