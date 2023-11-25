import React from "react";

const TableHeader = ({setSortRatings, setSortPopularity}) => {
  return (
    <thead>
      <tr>
        <th className="p-2 m-4">Name</th>
        <th className="p-2 m-4">
          <div className="flex">
          <img className="mr-1" onClick={()=> setSortRatings("ascending")} src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" />
          Rating
          <img className="ml-1" onClick={()=> setSortRatings("descending")} src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png" />
          </div>
          </th>
        <th className="p-2 m-4">
        <div className="flex">
          <img className="mr-1" onClick={()=> setSortPopularity("ascending")} src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" />
          Popularity
          <img className="ml-1" onClick={()=> setSortPopularity("descending")} src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png" />
          </div>
          </th>
        <th className="p-2 m-4">Release Date</th>
        <th className="p-2 m-4">Genre</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
