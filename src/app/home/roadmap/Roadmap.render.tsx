import {
  RoadmapDetailedViewInsertText,
  RoadmapEvents,
  RoadmapExtendedViewTextEnd,
  RoadmapExtendedViewTextStart,
} from "@/CONSTANTS/roadmap.constants";
import {
  RoadmapWrapper,
  RoadmapItem,
  Label,
  CurrentBadge,
  ColoredLink,
  BottomText,
} from "./Roadmap.style";
import { useRouter } from "next/navigation";

const Roadmap = () => {
  const router = useRouter();

  const navigateToFullRoadmap = () => {
    router.push("/roadmap-extended");
  };

  return (
    <RoadmapWrapper>
      {RoadmapEvents.map((event, idx) => (
        <RoadmapItem key={idx}>
          <Label>
            {event.label}
            {event.current && <CurrentBadge>Current</CurrentBadge>}
          </Label>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </RoadmapItem>
      ))}

      <BottomText>
        {RoadmapExtendedViewTextStart}{" "}
        <ColoredLink onClick={navigateToFullRoadmap}>
          {RoadmapDetailedViewInsertText}
        </ColoredLink>{" "}
        {RoadmapExtendedViewTextEnd}
      </BottomText>
    </RoadmapWrapper>
  );
};

export default Roadmap;
