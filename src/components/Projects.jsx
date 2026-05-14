import { projects } from "../data/portfolio";
import { ProjectIcon, IconExternalLink } from "./Icons";
import { useState, useEffect } from "react";

function ProjectCard({ project, delay }) {
  const {
    name,
    description,
    tags,
    link,
    iconColor,
    iconType,
    isMobile,
    images,
  } = project;

  const delayClass = delay === 1 ? " delay-1" : delay === 2 ? " delay-2" : "";

  const [currentIndex, setCurrentIndex] = useState(0);

  const hasImages = images && images.length > 0;

  //  Auto-slide
  useEffect(() => {
    if (!hasImages) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div
      className={`fade-in${delayClass}`}
      style={{
        background: isMobile
          ? "linear-gradient(135deg, rgba(34,211,184,0.06), rgba(124,109,250,0.06))"
          : "var(--surface)",
        border: `0.5px solid ${isMobile ? "rgba(34,211,184,0.2)" : "var(--border)"}`,
        borderRadius: "24px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Top */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: isMobile ? "rgba(34,211,184,0.1)" : "var(--accent3)",
          }}
        >
          <ProjectIcon type={iconType} color={iconColor} size={22} />
        </div>

        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <IconExternalLink size={14} />
          </a>
        ) : (
          <span style={{ fontSize: "10px", color: "var(--teal)" }}>
            Mobile App
          </span>
        )}
      </div>

      {/*  iPhone Mockup ONLY for mobile */}
      {isMobile && hasImages && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "500px",
              height: "500px",
              borderRadius: "28px",
              background: "#000",
              padding: "3px",
              position: "relative",
              boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
            }}
          >
            {/* Notch */}
            <div
              style={{
                position: "absolute",
                top: "6px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "50px",
                height: "12px",
                background: "#111",
                borderRadius: "10px",
                zIndex: 2,
              }}
            />

            {/* Screen */}
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "22px",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <img
                src={images[currentIndex]}
                alt={name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* Dots (clickable) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "6px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  gap: "4px",
                }}
              >
                {images.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      background:
                        i === currentIndex ? "#fff" : "rgba(255,255,255,0.3)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Name */}
      <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{name}</h3>

      {/* Description */}
      <p style={{ fontSize: "13px", marginBottom: "16px" }}>{description}</p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "10px",
              padding: "4px 10px",
              borderRadius: "100px",
              background: "var(--surface2)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "80px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h2>Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={i % 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
