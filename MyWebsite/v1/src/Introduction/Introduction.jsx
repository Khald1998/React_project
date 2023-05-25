import IntroductionCSS from "../Style/Introduction.module.css";
function Introduction() {
  return (
    <>
      <section className={`${IntroductionCSS.sec} text-center py-5`}>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iusto.</p>
      <p>Officia, quibusdam quisquam corporis obcaecati hic ab cumque quia inventore.</p>
      </section>
    </>
  );
}

export default Introduction;

