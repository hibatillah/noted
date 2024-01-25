const isMounted = typeof window !== "undefined";

const swapStorageLayout = () => {
  if (isMounted) {
    const layout = localStorage.getItem("layout");

    layout === "list"
      ? localStorage.setItem("layout", "grid")
      : localStorage.setItem("layout", "list");
  }
};

const getStorageLayout = () => {
  if (isMounted) {
    const layout = localStorage.getItem("layout");
    return layout === "grid" ? true : false;
  }
};

export { getStorageLayout, swapStorageLayout };
