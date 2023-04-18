function Select(props) {
  return (
    <div className={`text-center ${props.className}`}>
      <select name="cluster" id="cluster-select" className="">
        <option value="" disabled>
          Select a cluster
        </option>

        <option name="cluster" value="1">Cluster 1</option>
        <option name="cluster" value="2">Cluster 2</option>
        <option name="cluster" value="3">Cluster 3</option>
      </select>
    </div>
  );
}

export default Select;
