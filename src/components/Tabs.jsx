import { useDispatch } from "react-redux";
import { useState } from "react";
import { filterStatus } from "../redux/filter/action";
// import filterByStatus from "../redux/books/thunk/filter";

const Tabs = () => {
  const disPatch = useDispatch();
  const [activeTab, setActiveTab] = useState("all");

  const handleAllBook = () => {
    disPatch(filterStatus("ALL"));
    // disPatch(filterByStatus("ALL"));
    setActiveTab("all");
  };
  const handleFeaturedBook = () => {
    disPatch(filterStatus("FEATURED"));
    // disPatch(filterByStatus("FEATURED"));
    setActiveTab("featured");
  };
  return (
    <div className="flex items-center space-x-4">
      <button
        className={`filter-btn  ${activeTab == "all" ? "active-filter " : ""}}`}
        id="lws-filterAll"
        onClick={handleAllBook}
      >
        All
      </button>
      <button
        className={`filter-btn ${activeTab == "featured" && "active-filter "}}`}
        id="lws-filterFeatured"
        onClick={handleFeaturedBook}
      >
        Featured
      </button>
    </div>
  );
};

export default Tabs;
