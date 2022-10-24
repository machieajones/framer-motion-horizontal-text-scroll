import { useScroll, useTransform } from "framer-motion";
import {
  Header,
  BackgroundImg,
  Nav,
  Paragraph,
  Title,
  Section,
  Img,
} from "./style";

const imgs = ["./img/1.jpg", "./img/2.jpg", "./img/3.jpg"];

const App = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

  return (
    <>
      <Header>
        <BackgroundImg src={imgs[2]} alt="background image" />
        <Nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </Nav>
        <Paragraph>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          tristique dui nec laoreet lacinia. Proin ac pretium quam. Vestibulum
          consectetur vestibulum mi non ornare. Donec hendrerit nisi eget eros
          mollis, consequat tempor sapien dignissim. Vivamus fringilla dignissim
          ex ac congue. Pellentesque ullamcorper sem quam, eu pharetra metus
          molestie ac. Proin egestas odio nec est pellentesque imperdiet."
        </Paragraph>
        <Title style={{ x }}>We sell furniture</Title>
      </Header>
      <Section>
        <Img src={imgs[1]} alt="image 2" />
        <Paragraph>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          tristique dui nec laoreet lacinia. Proin ac pretium quam. Vestibulum
          consectetur vestibulum mi non ornare. Donec hendrerit nisi eget eros
          mollis, consequat tempor sapien dignissim. Vivamus fringilla dignissim
          ex ac congue. Pellentesque ullamcorper sem quam, eu pharetra metus
          molestie ac. Proin egestas odio nec est pellentesque imperdiet."
        </Paragraph>
      </Section>
      <Section>
        <Paragraph>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          tristique dui nec laoreet lacinia. Proin ac pretium quam. Vestibulum
          consectetur vestibulum mi non ornare. Donec hendrerit nisi eget eros
          mollis, consequat tempor sapien dignissim. Vivamus fringilla dignissim
          ex ac congue. Pellentesque ullamcorper sem quam, eu pharetra metus
          molestie ac. Proin egestas odio nec est pellentesque imperdiet."
        </Paragraph>
        <Img src={imgs[0]} alt="image 1" />
      </Section>
    </>
  );
};

export default App;
