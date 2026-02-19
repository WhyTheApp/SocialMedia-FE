"use client";

import {
  RoadmapEvents,
  RoadmapDetailedViewInsertText,
  RoadmapExtendedViewTextEnd,
  RoadmapExtendedViewTextStart,
} from "@/CONSTANTS/roadmap.constants";
import { RoadContainer, ColoredLink, BottomText } from "./Roadmap.style";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import PageContainer from "@/components/page-container/PageContainer.style";
import { RoadmapHeader } from "@/CONSTANTS/ui.constants";
import styles from "./Roadmap.module.css";

function getStatusLabel(status: string) {
  switch (status) {
    case "done":
      return "Completed";
    case "in-progress":
      return "In Progress";
    default:
      return "Upcoming";
  }
}

function getStatusClass(status: string) {
  switch (status) {
    case "done":
      return styles.done;
    case "in-progress":
      return styles.inProgress;
    default:
      return styles.upcoming;
  }
}

function buildRoadPath(count: number): string {
  // Build a winding S-curve path that snakes down the page
  const rowHeight = 120;
  const centerX = 450;
  const amplitude = 160;
  const parts: string[] = [];

  parts.push(`M ${centerX} 20`);

  for (let i = 0; i < count; i++) {
    const y1 = 20 + i * rowHeight;
    const y2 = 20 + (i + 1) * rowHeight;
    const midY = (y1 + y2) / 2;
    const direction = i % 2 === 0 ? -1 : 1;
    const cpX = centerX + direction * amplitude;

    parts.push(`C ${cpX} ${midY}, ${cpX} ${midY}, ${centerX} ${y2}`);
  }

  return parts.join(" ");
}

const Roadmap = () => {
  const router = useRouter();

  const navigateToFullRoadmap = () => {
    router.push("/roadmap-extended");
  };

  const totalHeight = 20 + RoadmapEvents.length * 120 + 40;
  const roadPathD = buildRoadPath(RoadmapEvents.length);

  return (
    <PageContainer>
      <PageHeader>{RoadmapHeader}</PageHeader>

      <RoadContainer>
        <svg
          className={styles.roadSvg}
          viewBox={`0 0 900 ${totalHeight}`}
          preserveAspectRatio="none"
        >
          <path d={roadPathD} className={styles.roadPathGlow} />
          <path d={roadPathD} className={styles.roadPath} />
        </svg>

        <div className={styles.milestoneList}>
          {RoadmapEvents.map((event, idx) => {
            const side = idx % 2 === 0 ? "left" : "right";
            const statusClass = getStatusClass(event.status);

            return (
              <div
                key={idx}
                className={`${styles.milestoneRow} ${side === "left" ? styles.left : styles.right
                  }`}
              >
                <div
                  className={`${styles.milestoneDot} ${statusClass}`}
                />
                <div
                  className={`${styles.milestoneCard} ${statusClass}`}
                >
                  <span className={`${styles.statusBadge} ${statusClass}`}>
                    {getStatusLabel(event.status)}
                  </span>
                  <h3 className={styles.milestoneTitle}>{event.title}</h3>
                  <p className={styles.milestoneDesc}>{event.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <BottomText>
          {RoadmapExtendedViewTextStart}{" "}
          <ColoredLink onClick={navigateToFullRoadmap}>
            {RoadmapDetailedViewInsertText}
          </ColoredLink>{" "}
          {RoadmapExtendedViewTextEnd}
        </BottomText>
      </RoadContainer>
    </PageContainer>
  );
};

export default Roadmap;
