import React, {useState, useContext, useEffect} from "react";
import "./CustomProjects.scss";
import {customProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function CustomProjects() {
  const {isDark} = useContext(StyleContext);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
  }, [selectedProject]);

  if (!customProjects.display) return null;

  return (
    <>
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="custom-projects">
          {/* 1. 修改容器 Class 名稱 */}
          <div className="custom-project-main-div">
            <div className="custom-project-header">
              <h1
                className={
                  isDark
                    ? "dark-mode heading custom-project-heading"
                    : "heading custom-project-heading"
                }
              >
                {customProjects.title}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode subTitle custom-project-subtitle"
                    : "subTitle custom-project-subtitle"
                }
              >
                {customProjects.subtitle || "MY WORK & EXPERIENCES"}
              </p>
            </div>

            <div className="custom-project-cards-div">
              {customProjects.projects.map((project, i) => (
                <div
                  key={i}
                  // 2. 修改卡片 Class 名稱，避開原版 .project-card
                  className={
                    isDark
                      ? "dark-mode custom-project-card"
                      : "custom-project-card"
                  }
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="custom-project-image-div">
                    <img
                      src={
                        project.image ||
                        (project.slides && project.slides[0]?.src)
                      }
                      alt={project.title}
                      className="card-image"
                    />
                  </div>

                  <div className="custom-project-detail-div">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.title}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.subtitle}
                    </p>
                    <p
                      className={
                        isDark ? "dark-mode card-summary" : "card-summary"
                      }
                    >
                      {project.summary}
                    </p>
                  </div>

                  <div className="custom-project-card-footer">
                    <span
                      className={
                        isDark
                          ? "dark-mode custom-project-tag"
                          : "custom-project-tag"
                      }
                    >
                      READ MORE
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>

      {/* Modal 區塊保持不變，因為它有獨立的 Overlay 覆蓋，不太會受影響 */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`project-modal-content ${isDark ? "dark-mode" : ""}`}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <ProjectDetailView project={selectedProject} isDark={isDark} />
          </div>
        </div>
      )}
    </>
  );
}

// 詳細內容組件 (這部分保持不變)
function ProjectDetailView({project, isDark}) {
  const [slideIndex, setSlideIndex] = useState(0);
  const nextSlide = () =>
    setSlideIndex(prev => (prev + 1) % project.slides.length);
  const prevSlide = () =>
    setSlideIndex(
      prev => (prev - 1 + project.slides.length) % project.slides.length
    );
  const currentSlide = project.slides[slideIndex];

  return (
    <div className="modal-scroll-container">
      <div className="vertical-project-view">
        <div className="content-block">
          <h2 className="sp-title">{project.title}</h2>
          <p className="sp-subtitle">{project.subtitle}</p>
          <div className="details-group">
            {project.descriptionSections.map((section, idx) => (
              <div key={idx} className="sp-section">
                <span className="sp-heading">{section.heading}</span>
                <ul className="sp-points">
                  {section.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      // 使用 dangerouslySetInnerHTML 來渲染 HTML
                      dangerouslySetInnerHTML={{__html: point}}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="media-block">
          {project.slides && project.slides.length > 0 && (
            <div className="sp-slider">
              <div className="slider-frame">
                {project.slides.length > 1 && (
                  <button className="slider-btn prev" onClick={prevSlide}>
                    &#10094;
                  </button>
                )}
                <div className="media-container">
                  {currentSlide.type === "image" ? (
                    <img
                      src={currentSlide.src}
                      alt="Slide"
                      className="media-content"
                    />
                  ) : (
                    <iframe
                      title="Video"
                      src={currentSlide.src}
                      className="media-content video"
                      frameBorder="0"
                      allowFullScreen
                    />
                  )}
                </div>
                {project.slides.length > 1 && (
                  <button className="slider-btn next" onClick={nextSlide}>
                    &#10095;
                  </button>
                )}
              </div>
              <p className="sp-caption">{currentSlide.caption}</p>
              {project.slides.length > 1 && (
                <div className="slider-dots">
                  {project.slides.map((_, idx) => (
                    <span
                      key={idx}
                      className={`dot ${idx === slideIndex ? "active" : ""}`}
                      onClick={() => setSlideIndex(idx)}
                    ></span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
