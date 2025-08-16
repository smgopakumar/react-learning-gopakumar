import { useState } from "react";

export default function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [submitted, setsubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmitted({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name :
            <input
              type="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: "100%", padding: "8px", marginTop: "4px" }}
            />
          </label>

          <label style={{ marginTop: "10px" }}>
            Email :
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "100%", padding: "8px", marginTop: "4px" }}
            />
          </label>

          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "10px 15px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </div>
      </form>
      {submitted && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <h3>Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {submitted.name}
          </p>
          <p>
            <strong>Email:</strong> {submitted.email}
          </p>
        </div>
      )}
    </div>
  );
}
