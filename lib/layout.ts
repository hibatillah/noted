const swapSessionLayout = () => {
  const layout = sessionStorage.getItem("layout");

  layout === "list"
    ? sessionStorage.setItem("layout", "grid")
    : sessionStorage.setItem("layout", "list");
};

const getSessionLayout = () => {
  const layout = sessionStorage.getItem("layout");
  return layout === "grid" ? true : false;
};

export { getSessionLayout, swapSessionLayout };
