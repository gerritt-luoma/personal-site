import SiteTimeline from "@components/Timeline/SiteTimeline";
import { TimelineItem } from "@prisma/client";
import { Card, Flex, Title, Divider } from "@mantine/core";

const test: TimelineItem[] = [
    {
        'id': '1',
        'title': 'This is a title',
        'blurb': 'This is a blurb',
        'description': 'This is a description',
        'createdOn': new Date('January 25, 1999'),
        'type': 1
    }
];

const Timeline = () => {
    return (
        <Card shadow={'sm'} radius={'lg'} w={'50%'}>
          <Flex align={'center'} direction={'column'} gap={'xl'}>
            <Title order={2}>Site Timeline</Title>
            <Divider variant="solid" size={'xs'} w={'100%'}/>
            <SiteTimeline items={test}/>
          </Flex>
        </Card>
    )
}

export default Timeline;