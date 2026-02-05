import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { CatalogMain } from "./catalog/catalog-main";
import { SearchScreen } from "./catalog/search-screen";
import { FiltersScreen } from "./catalog/filters-screen";
import { ItemDetail } from "./catalog/item-detail";
import { SearchResults } from "./catalog/search-results";
import { CategoryView } from "./catalog/category-view";

type View =
  | { type: "main" }
  | { type: "search" }
  | { type: "filters" }
  | { type: "item"; itemId: number }
  | { type: "results"; query: string }
  | { type: "category"; categoryId: string };

export function CatalogDemo() {
  const [view, setView] = useState<View>({ type: "main" });

  const handleSearch = (query: string) => {
    setView({ type: "results", query });
  };

  const handleFiltersApply = (filters: any) => {
    console.log("Filters applied:", filters);
    // In real app, would refetch with filters
  };

  const handleItemClick = (itemId: number) => {
    setView({ type: "item", itemId });
  };

  const handleCategoryClick = (categoryId: string) => {
    setView({ type: "category", categoryId });
  };

  const handleBook = (itemId: number) => {
    console.log("Booking item:", itemId);
    alert(`Бронирование вещи #${itemId} - переход на экран бронирования`);
  };

  const handleMessage = (ownerId: number) => {
    console.log("Message owner:", ownerId);
    alert(`Сообщение владельцу #${ownerId} - переход в чат`);
  };

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {view.type === "main" && (
          <CatalogMain
            key="main"
            onSearch={() => setView({ type: "search" })}
            onFilters={() => setView({ type: "filters" })}
            onItemClick={handleItemClick}
            onCategoryClick={handleCategoryClick}
          />
        )}

        {view.type === "search" && (
          <SearchScreen
            key="search"
            onClose={() => setView({ type: "main" })}
            onSearch={handleSearch}
          />
        )}

        {view.type === "filters" && (
          <FiltersScreen
            key="filters"
            onClose={() => setView({ type: "main" })}
            onApply={handleFiltersApply}
          />
        )}

        {view.type === "item" && (
          <ItemDetail
            key={`item-${view.itemId}`}
            itemId={view.itemId}
            onClose={() => setView({ type: "main" })}
            onBook={handleBook}
            onMessage={handleMessage}
          />
        )}

        {view.type === "results" && (
          <SearchResults
            key="results"
            query={view.query}
            onBack={() => setView({ type: "search" })}
            onFilters={() => setView({ type: "filters" })}
            onItemClick={handleItemClick}
          />
        )}

        {view.type === "category" && (
          <CategoryView
            key={`category-${view.categoryId}`}
            categoryId={view.categoryId}
            onBack={() => setView({ type: "main" })}
            onItemClick={handleItemClick}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
