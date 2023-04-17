function Select() {
  return (
    <div className="text-center my-3">
      <select name="cluster" id="cluster-select">
        <option value="" disabled>
          Select a cluster
        </option>

        <option name="cluster" value="1">cluster 1</option>
        <option name="cluster" value="2">cluster 2</option>
        <option name="cluster" value="3">cluster 3</option>
      </select>
    </div>
  );
}

export default Select;
