const ExtraFeature = () => {
  return (
    <>
      <div className='top-resto-search-bar'>
        <input
          type='text'
          className='search-restaurant'
          id='search-top-resto'
          placeholder='Search for Restaurant'
          value={inputResto}
          onChange={(e) => {
            return SetInputResto(e.target.value);
          }}
        />
        <button
          className='resto-search-btn'
          onClick={() => {
            const searchValue = document
              .getElementById("search-top-resto")
              .value.toLowerCase();

            const searchData = AllBrands.filter((data) => {
              return data.info.name.toLowerCase().includes(searchValue);
            });
            SetTopBrands(searchData);
          }}
        >
          <span className='bi bi-search'></span>
        </button>
      </div>
      <button
        className='top-resto-btn'
        onClick={() => {
          const filterdData = TopBrands.filter((data) => {
            return data.info.avgRating > 4;
          });
          SetTopBrands(filterdData);
        }}
      >
        Top Restaurant
      </button>
    </>
  );
};
