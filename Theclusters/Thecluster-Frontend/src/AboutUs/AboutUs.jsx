import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat
            tristique lobortis. Donec non mauris non sapien dictum eleifend id
            et est. Etiam rutrum blandit tristique. Sed blandit tellus in mi
            imperdiet, eu finibus ex consectetur. Nullam aliquam nisl et orci
            malesuada, nec tincidunt felis ultricies. Maecenas in arcu quis elit
            pretium gravida eget sed ipsum. Proin vel ipsum ut lacus tincidunt
            aliquam quis vel lorem. In pulvinar sagittis nisl, ut tempor turpis
            venenatis at. Sed vel lacus eget sapien bibendum gravida eu nec dui.
            Curabitur ut nulla felis. Donec finibus enim risus, eu bibendum
            tellus tincidunt vitae.
          </p>
          <p>
            Nullam laoreet sapien at consequat feugiat. Donec commodo molestie
            purus, vel euismod nisl maximus eget. Sed scelerisque ut quam at
            ultricies. Donec vestibulum risus a nulla bibendum rhoncus. Duis
            commodo est eget lectus faucibus iaculis. Nulla facilisi. Donec
            ultricies semper sapien, eu imperdiet augue hendrerit id. Nunc
            ultrices leo eu aliquet blandit. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse
            vel nisl molestie, pretium lacus a, consequat magna. Sed malesuada
            congue felis, ut vestibulum felis lobortis nec. Maecenas ullamcorper
            varius tortor vitae eleifend. Nulla sit amet metus in nibh dapibus
            posuere. Curabitur convallis erat eget nisl posuere auctor. In a
            turpis quis enim aliquam malesuada. Sed eu arcu non nisi sodales
            fringilla.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
