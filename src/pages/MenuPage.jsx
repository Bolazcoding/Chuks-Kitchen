import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JollofMenuMeal from "../components/JollofMenuMeal";
import MenuHero from "../components/MenuHero";
import PopularMenuMeal from "../components/PopularMenuMeal";
import SwallowMenuMeal from "../components/SwallowMenuMeal";
import Main from "./Main";
import { popularMeals } from "../data/popularMeals";
import { jollofRiceMeals } from "../data/jollofRiceType";
import { swallowMeals } from "../data/swallowMealType";
import { parsePrice } from "../utils/price";

const categoryOptions = [
  { key: "all", label: "All" },
  { key: "popular", label: "Popular" },
  { key: "jollof", label: "Jollof Rice" },
  { key: "swallow", label: "Swallow & Soups" },
];

function MenuPage({ setLoggedIn }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");

  const normalizedQuery = query.trim().toLowerCase();
  const filterItem = (item) => {
    if (!normalizedQuery) return true;
    return (
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery)
    );
  };

  const sortItems = (items) => {
    if (sortBy === "price_low") {
      return [...items].sort(
        (a, b) => parsePrice(a.price) - parsePrice(b.price),
      );
    }

    if (sortBy === "price_high") {
      return [...items].sort(
        (a, b) => parsePrice(b.price) - parsePrice(a.price),
      );
    }

    return items;
  };

  const popularFiltered = sortItems(
    popularMeals.filter(
      (item) =>
        filterItem(item) && (category === "all" || category === "popular"),
    ),
  );

  const jollofFiltered = sortItems(
    jollofRiceMeals.filter(
      (item) =>
        filterItem(item) && (category === "all" || category === "jollof"),
    ),
  );

  const swallowFiltered = sortItems(
    swallowMeals.filter(
      (item) =>
        filterItem(item) && (category === "all" || category === "swallow"),
    ),
  );

  const totalResults =
    popularFiltered.length + jollofFiltered.length + swallowFiltered.length;

  return (
    <div className="bg-soft-gray">
      <Header setLoggedIn={setLoggedIn} />
      <Main>
        <MenuHero />
        <section className="maxWidth mx-auto max-w-6xl py-10 px-6 max-[950px]:px-4 max-[630px]:px-3">
          <div className="flex flex-col gap-6 bg-white rounded-[20px] border border-icon-text/30 px-6 py-6 shadow-sm max-[630px]:px-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <label className="block text-text-color text-[14px] font-medium mb-2">
                  Search meals
                </label>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for Jollof, soup, grill..."
                  className="w-full border border-icon-text/30 rounded-2xl px-4 py-3 text-text-color text-[16px] outline-none focus:border-primary-color focus:ring-2 focus:ring-primary-color/20"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                {categoryOptions.map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setCategory(option.key)}
                    className={`rounded-full px-4 py-2 text-[14px] font-semibold transition ${
                      category === option.key
                        ? "bg-primary-color text-white"
                        : "bg-white text-text-color border border-icon-text/30 hover:bg-primary-color/10"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-text-color text-[16px] font-medium">
                {totalResults} menu item{totalResults === 1 ? "" : "s"} found
              </p>
              <div className="flex items-center gap-3">
                <label className="text-text-color text-[14px] font-medium">
                  Sort by:
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="rounded-2xl border border-icon-text/30 bg-white px-4 py-3 text-text-color text-[16px] outline-none"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price_low">Price: low to high</option>
                  <option value="price_high">Price: high to low</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="maxWidth mx-auto max-w-6xl px-6 pb-20 max-[950px]:px-4 max-[630px]:px-3">
          {totalResults === 0 ? (
            <div className="bg-white rounded-[20px] border border-icon-text/30 px-8 py-12 text-center text-text-color text-[18px] font-medium">
              No meals match your search. Try a different keyword or category.
            </div>
          ) : (
            <>
              {popularFiltered.length > 0 && (
                <PopularMenuMeal popularMeals={popularFiltered} />
              )}
              {jollofFiltered.length > 0 && (
                <JollofMenuMeal jollofRiceMeals={jollofFiltered} />
              )}
              {swallowFiltered.length > 0 && (
                <SwallowMenuMeal swallowMeals={swallowFiltered} />
              )}
            </>
          )}
        </section>

        <Footer />
      </Main>
    </div>
  );
}

export default MenuPage;
