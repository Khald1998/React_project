function Select() {
  return (
    <div className="text-center my-3">
      <select name="cluster" id="Cluster-select">
        <option value="" disabled>
          Select a Cluster
        </option>

        <option name="claster" value="1">Cluster 1</option>
        <option name="claster" value="2">Cluster 2</option>
        <option name="claster" value="3">Cluster 3</option>
      </select>
    </div>
  );
}

export default Select;
