const notFound = (req, res) => {
  res.status(404).json({ message: "notFound" });
};

export default notFound;
