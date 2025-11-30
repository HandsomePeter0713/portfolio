// src/components/publicationCard/PublicationCard.js

import React from "react";
import "./PublicationCard.scss";
import { myName } from "../../portfolio";
import { Fade, Slide } from "react-reveal";

// 處理作者名字粗體的輔助函式 (和之前一樣)
const FormatAuthors = ({ authors }) => {
  if (!authors) return null;
  const parts = authors.split(new RegExp(`(${myName})`, 'gi'));
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === myName.toLowerCase() ? (
          <strong key={index}>{part}</strong>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default function PublicationCard({ paper }) {
  return (
    <div>
      <Fade left duration={1000}>
        <div className="publication-card-item">
          <p className="publication-text">
            <FormatAuthors authors={paper.authors} />

            <a href={paper.link || "#"} target="_blank" rel="noopener noreferrer" className="publication-title">
              "{paper.title},"
            </a>
            <em className="publication-journal"> {paper.journal}</em>
            {paper.volume && `, Vol. ${paper.volume}`}
            {paper.issue && `, No. ${paper.issue}`}
            {paper.pages && `, pp. ${paper.pages}`}
            {paper.date && `, ${paper.date}.`}

            {paper.authorNote && (
              <span className="publication-author-note"> {paper.authorNote}</span>
            )}

          </p>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="publication-card-border"></div>
      </Slide>
    </div>
  );
}