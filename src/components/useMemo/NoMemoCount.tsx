import { useEffect, useRef, useState } from "react";
import { metricsCalculation } from "./CharacterCounter";
import ExpensiveComponent from "./ExpensiveComponent";


const NoMemoCount = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const metrics = metricsCalculation(text);

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

export default NoMemoCount;