import React from "react";

function SearchBar({sortBy, onSortBy, filterBy, onFilter}) {
  function handleSort(e){
    onSortBy(e.target.value)
  }

  function handleFilter(e){
    onFilter(e.target.value)
  }
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy==='Alphabetically'}
          onChange={handleSort}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy==='Price'}
          onChange={handleSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter} value={filterBy}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
