import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => (
  <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>
);

export default DemoOutput;
