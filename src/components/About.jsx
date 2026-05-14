import { stats, strengths } from "../data/portfolio";

function SectionHeader({ label, title }) {
  return (
    <>
      <p
        className="fade-in"
        style={{
          fontFamily: '"DM Mono", monospace',
          fontSize: "11px",
          color: "var(--accent)",
          letterSpacing: "2px",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        {label}
      </p>
      <h2
        className="fade-in"
        style={{
          fontSize: "clamp(28px, 4vw, 44px)",
          fontWeight: 600,
          letterSpacing: "-1px",
          marginBottom: "12px",
          color: "var(--text)",
        }}
      >
        {title}
      </h2>
    </>
  );
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "clamp(60px, 8vw, 120px) clamp(1rem, 6vw, 4rem)",
        background: "var(--bg)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionHeader
          label="01 · About"
          title="Turning ideas into real-world software"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(24px, 4vw, 60px)",
            marginTop: "48px",
            alignItems: "start",
          }}
        >
          {/* Bio card */}
          <div
            className="fade-in"
            style={{
              background: "var(--surface)",
              border: "0.5px solid var(--border)",
              borderRadius: "24px",
              padding: "32px",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                color: "var(--text2)",
                lineHeight: 1.85,
              }}
            >
              <p>
                I'm{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                  Jeremiah Laman
                </strong>{" "}
                — Computer Engineering graduate and full-stack developer from
                Isabela, Philippines, with 2+ years of experience as an IT
                Instructor. Passionate about building clean, efficient, and
                user-centered applications that solve real-world problems and
                create meaningful impact.
              </p>
              <p style={{ marginTop: "16px" }}>
                Having served as an{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                  IT Instructor
                </strong>{" "}
                for over two years, I've not only built real-world systems used
                by real users, but I've also deepened my understanding of
                software fundamentals by teaching them.
              </p>
              <p style={{ marginTop: "16px" }}>
                I thrive at the intersection of clean code and thoughtful design
                — whether it's a mobile app, a web platform, or an attendance
                system built with QR codes.
              </p>
            </div>

            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginTop: "24px",
              }}
            >
              {stats.map(({ num, label }) => (
                <div
                  key={label}
                  style={{
                    background: "var(--surface2)",
                    border: "0.5px solid var(--border)",
                    borderRadius: "12px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "28px",
                      fontWeight: 600,
                      color: "var(--text)",
                      letterSpacing: "-1px",
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--text3)",
                      fontFamily: '"DM Mono", monospace',
                      letterSpacing: "0.5px",
                      marginTop: "4px",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths card */}
          <div
            className="fade-in delay-1"
            style={{
              background: "var(--surface)",
              border: "0.5px solid var(--border)",
              borderRadius: "24px",
              padding: "32px",
              backdropFilter: "blur(12px)",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "var(--text3)",
                fontFamily: '"DM Mono", monospace',
                letterSpacing: "1px",
                marginBottom: "14px",
              }}
            >
              CORE STRENGTHS
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {strengths.map(({ label, color }) => (
                <div
                  key={label}
                  style={{
                    background: "var(--surface2)",
                    border: "0.5px solid var(--border)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    fontSize: "13px",
                    color: "var(--text2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: color,
                      flexShrink: 0,
                    }}
                  />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
