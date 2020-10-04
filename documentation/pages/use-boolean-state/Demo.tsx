import useBooleanState from "use-boolean-state";

export default function Demo() {
  const [isActive, setActive] = useBooleanState();

  return (
    <div>
      <button onClick={setActive.toggle}>Toggle</button>

      {isActive ? (
        <div style={{ border: "2px solid darkgreen", background: "#aaffaa" }}>
          <h2>It is active</h2>
          <button onClick={setActive.toFalse}>Deactivate</button>
        </div>
      ) : (
        <div style={{ border: "2px solid darkred", background: "#ffaaaa" }}>
          <h2>It is inactive</h2>
          <button onClick={setActive.toTrue}>Activate</button>
        </div>
      )}
    </div>
  );
}
