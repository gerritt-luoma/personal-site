import { Timeline } from "@mantine/core";
import { TimelineItem as TimelineItemData } from "@prisma/client";
import TimelineItem from "./TimelineItem";

type TimelineProps = {
    items: TimelineItemData[]
}

const SiteTimeline = ({ items }: TimelineProps) => {
    return (
        <Timeline bulletSize={20} lineWidth={2} color={'pink.6'} m={'auto'}>
            {items.map(item => <TimelineItem {...item}/>)}
        </Timeline>
    );
}

export default SiteTimeline