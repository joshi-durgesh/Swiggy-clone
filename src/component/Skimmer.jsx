const CardSkimmer = () => {
  return (
    <div className='resto-card-skimmer'>
      <div className='card-img-skimmer'></div>
      <div className='card-title-skimmer'></div>
      <div className='card-rating-skimmer'></div>
      <div className='card-cuisine-skimmer'></div>
      <div className='card-locality-skimmer'></div>
    </div>
  );
};

const TopRestoSkimmers = () => {
  return (
    <div className='resto-skimmer-container'>
      <div className='resto-header-skimmer'>
        <div className='resto-header-skimmer-title'></div>
        <div className='resto-header-skimmer-search'></div>
        <div className='resto-top-filter-skimmer'></div>
      </div>
      <div className='resto-item-skimmer'>
        <CardSkimmer />
        <CardSkimmer />
        <CardSkimmer />
        <CardSkimmer />
      </div>
    </div>
  );
};

export const BannerSkimmers = () => {
  return (
    <>
      <div className='banner-skimmer-container'>
        <div className='banner-skimmer-header'>
          <div className='banner-skimmer-title'></div>
          <div className='banner-skimmer-btns'>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='banner-skimmer-content'>
          <div className='banner-skimmer'></div>
          <div className='banner-skimmer'></div>
          <div className='banner-skimmer'></div>
          <div className='banner-skimmer'></div>
          <div className='banner-skimmer'></div>
          <div className='banner-skimmer'></div>
          <div className='banner-skimmer'></div>
        </div>
      </div>
      <TopRestoSkimmers />
    </>
  );
};
