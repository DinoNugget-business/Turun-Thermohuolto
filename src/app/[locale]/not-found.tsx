export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 text-center">
      <div>
        <h1 className="text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-display)", color: "#0F1B2D" }}>
          404
        </h1>
        <p style={{ color: "#5A6B7F" }}>Sivua ei löytynyt — Page not found</p>
        <a
          href="/fi"
          className="inline-block mt-4 px-5 py-2 rounded-lg text-white text-sm font-medium"
          style={{ backgroundColor: "#00A3BF" }}
        >
          Etusivulle
        </a>
      </div>
    </div>
  );
}
