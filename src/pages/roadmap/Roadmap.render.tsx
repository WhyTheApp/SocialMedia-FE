import {
  RoadmapEvents,
  RoadmapExtendedViewText,
} from "@/CONSTANTS/roadmap.constants";
import {
  RoadmapWrapper,
  RoadmapItem,
  Label,
  CurrentBadge,
} from "./Roadmap.style";

const Roadmap = () => {
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
      <a href="/roadmap-extended" target="_blank">
        {RoadmapExtendedViewText}
      </a>
    </RoadmapWrapper>
  );
};

export default Roadmap;
