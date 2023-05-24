// Code Keypad Component Here

function Keypad() {
  function handleChange() {
    console.log("Entering password...");
  }
  return (
    <div className="keypad">
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
