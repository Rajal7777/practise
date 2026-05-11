import { useState, useEffect } from "react";

export default function App() {
  const [text, setText] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    const storedText = localStorage.getItem("text");
    if (storedText) {
      setText(storedText);
    }
  }, []);

  // Save to localStorage whenever text changes
  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  function handleSubmit(event) {
    event.preventDefault();
    // The text is already saved via the useEffect above
    // But you might want to show a success message or clear something
    console.log("Form submitted with text:", text);
  }

  function handleChange(event) {
    setText(event.target.value);
  }

  return (
    <>
      <p>Hello, World!</p>
      <form onSubmit={handleSubmit}>
        <input
          name="text"
          id="text"
          value={text}
          onChange={handleChange} // Added onChange handler
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
}
