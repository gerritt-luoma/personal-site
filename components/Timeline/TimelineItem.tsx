import { Timeline, Text } from "@mantine/core";
import { IconPlus, IconRefresh, IconAlertTriangle, IconDatabase, IconUserCheck, IconTrashX, IconQuestionCircle, TablerIcon } from "@tabler/icons";
import { ItemType } from "@lib/enums";

type TimelineItemProps = {
    title: string,
    blurb: string,
    createdOn: Date,
    type: number
}

const TimelineItem = ({title, blurb, createdOn, type}: TimelineItemProps) => {
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
    return (
        <Timeline.Item title={title} bullet={<Icon size={16}/>}>
            <Text color={'dimmed'} size={'xs'}>
                {blurb}:
                <Text color={'pink.6'}>{createdOn.toDateString()}</Text>
            </Text>
        </Timeline.Item>
    )
}

export default TimelineItem