import MoreCSS from "../Style/More.module.css";
function More() {
  return (
    <>
      <div className={`${MoreCSS.cont} `}>
        <div className={`${MoreCSS.backgroundTL} `}></div>
		<div className={`${MoreCSS.backgroundBR} `}></div>
        <section className={`${MoreCSS.sec} text-center`}>
          <div>
            <h1>Welcome to Geeks for geeks</h1>
            <h3>Blurred Background Image</h3>
            <p>Example of css program to blur background image</p>
			<h1>xxx</h1><h1>xxx</h1><h1>xxx</h1><h1>xxx</h1>
          </div>
        </section>
      </div>
    </>
  );
}

export default More;
