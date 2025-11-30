// src/containers/publication/Publication.js

import React from "react";
import "./Publication.scss"; 
import { publicationInfo } from "../../portfolio";
import PublicationCard from "../../components/publicationCard/PublicationCard"; // <-- 引入新的專用組件

export default function Publication() {
  if (publicationInfo.display) {
    return (
      <div className="publication-section" id="publication">
        <h1 className="publication-heading">Publications</h1>
        <div className="publication-list-container">
          {publicationInfo.papers.map((paper, index) => (
            // 使用新的 PublicationCard
            <PublicationCard key={index} paper={paper} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}