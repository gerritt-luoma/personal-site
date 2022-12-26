import { Timeline, Text } from "@mantine/core";
import { TimelineItem as TimelineItemData } from "@prisma/client";
import { IconPlus, IconRefresh, IconAlertTriangle, IconDatabase, IconUserCheck, IconTrashX, IconQuestionCircle, TablerIcon } from "@tabler/icons";
import { ItemType } from "@lib/enums";

type TimelineProps = {
    items: TimelineItemData[]
}

const SiteTimeline = ({ items }: TimelineProps) => {
    function determineIcon(type: number) {
        let Icon: TablerIcon;
        switch(type) {
            case ItemType.ADDITION:
                Icon = IconPlus;
                break;
            case ItemType.REMOVAL:
                Icon = IconTrashX;
                break;
            case ItemType.DECISION:
                Icon = IconAlertTriangle;
                break;
            case ItemType.FRONTEND_RELATED:
                Icon = IconUserCheck;
                break;
            case ItemType.BACKEND_RELATED:
                Icon = IconDatabase;
                break;
            case ItemType.REWORK:
                Icon = IconRefresh;
                break;
            default:
                console.error(`Invalid item type: ${type}`);
                Icon = IconQuestionCircle;
        }
        return Icon;
    }
    return (
        <Timeline bulletSize={24} lineWidth={2} color={'pink.6'} active={1}>
            {items.map(item => {
                let Icon = determineIcon(item.type);
                return (
                    <Timeline.Item title={item.title} bullet={<Icon size={16}/>}>
                        <Text color={'dimmed'} size={'xs'}>
                            {item.blurb}:
                            <Text color={'pink.6'}>{item.createdOn.toDateString()}</Text>
                        </Text>
                    </Timeline.Item>
                );
            })}
        </Timeline>
    );
}

export default SiteTimeline