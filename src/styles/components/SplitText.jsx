import AnimatedChar from "./AnimateCharacter";

export default function SplitText({ children }) {
  const elements = [];
  const words = children.split(" "); // Split line into words

  words.forEach((word, wordIndex) => {
    elements.push(
      <span
        key={`word-${wordIndex}`}
        style={{ display: "inline-block", whiteSpace: "nowrap" }}
      >
        {word.split("").map((char, charIndex) => (
          <AnimatedChar
            char={char}
            wordIndex={wordIndex}
            charIndex={charIndex}
            key={`char-${wordIndex}-${charIndex}`}
          />
        ))}
      </span>
    );

    // Add space between words
    if (wordIndex !== words.length - 1) {
      elements.push(" ");
    }
  });

  return <>{elements}</>;
}
