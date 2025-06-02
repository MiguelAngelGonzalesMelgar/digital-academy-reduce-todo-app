import { useEffect, useMemo, useRef, useState } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

export const metricsCalculation = (inputValue: string) => {
  const removedSpaces = inputValue.trim()
  const words = removedSpaces.length > 0 ? removedSpaces.split(/\s+/) : [];
  const characterCount = inputValue.length;
  const wordCount =  words.length;
  const averageWordLength = wordCount === 0 ? 0 : words.reduce((acc, word) => acc + word.length, 0) / wordCount;
  const wordsPerMinute = 200;
  const readingTime = wordCount === 0 ? 0 : Math.ceil(wordCount / wordsPerMinute * 60);

  return {
    characterCount,
    wordCount,
    averageWordLength,
    readingTime
  }
}

const CharacterCounter = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const metrics = useMemo(() => metricsCalculation(text), [text]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  return (
    <section>
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <h2>Contador de caracteres</h2>
      <textarea
        ref={textareaRef}
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Write something..."
        style={{ width: "100%", minHeight: 80, resize: "none", overflow: "hidden" }}
      />
      <ul>
        <li>Total characters: {metrics.characterCount}</li>
        <li>Total words: {metrics.wordCount}</li>
        <li>Average word length: {metrics.averageWordLength.toFixed(2)}</li>
        <li>Stimated reading time: {metrics.readingTime} segundos</li>
      </ul>
    </div>
    <ExpensiveComponent/>
    </section>
  );
};

export default CharacterCounter;
