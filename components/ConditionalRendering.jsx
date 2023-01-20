export default function ConditionalRendering(props) {
  const { positive, negative, condition } = props;
  if (condition) {
    return positive;
  }
  return negative;
}
