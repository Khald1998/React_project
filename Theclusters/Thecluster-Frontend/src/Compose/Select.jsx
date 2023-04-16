function Select() {
  return (
    <div className="text-center my-3">
      <select name="Cluster" id="Cluster-select">
        <option value="" disabled>
          Select a Cluster
        </option>

        <option value="Cluster1">Cluster 1</option>
        <option value="Cluster2">Cluster 2</option>
        <option value="Cluster3">Cluster 3</option>
      </select>
    </div>
  );
}

export default Select;
