import SiteTimeline from "@components/Timeline/SiteTimeline";
import { TimelineItem } from "@prisma/client";
import { Card, Flex, Title, Divider } from "@mantine/core";

const test: TimelineItem[] = [
    {
        'id': '1',
        'title': 'This is an Addition',
        'blurb': 'This is a blurb',
        'description': 'This is a description',
        'createdOn': new Date('January 25, 1999'),
        'type': 0
    },
    {
        'id': '2',
        'title': 'This is a Removal',
        'blurb': 'This is a blurb',
        'description': 'This is a description',
        'createdOn': new Date('January 25, 1999'),
        'type': 1
    },
    {
        'id': '3',
        'title': 'This is a Decision',
        'blurb': 'This is a blurb',
        'description': 'This is a description',
        'createdOn': new Date('January 25, 1999'),
        'type': 2
    },
    {
        'id': '4',
        'title': 'This is Frontend Related',
        'blurb': 'This is a blurb',
        'description': 'This is a description',
        'createdOn': new Date('January 25, 1999'),
        'type': 3
    },
    {
        'id': '5',
        'title': 'This is Backend Related',
        'blurb': 'This is a blurb',
        'description': 'This is a description',
        'createdOn': new Date('January 25, 1999'),
        'type': 4
    },
    {
        'id': '6',
        'title': 'This is a Rework',
        'blurb': 'This is a blurb',
        'description': 'This is a description',
        'createdOn': new Date('January 25, 1999'),
        'type': 5
    },
    {
        'id': '6',
        'title': 'This is an Unrecognized Type',
        'blurb': 'This is a blurb',
        'description': 'This is a description',
        'createdOn': new Date('January 25, 1999'),
        'type': 6
    },
];

const Timeline = () => {
    return (
        <Flex direction={'column'} align='center' justify='center' gap={'xl'} mx={200}>
            <Card shadow={'sm'} radius={'lg'} miw={'75%'}>
            <Flex direction={'column'} align='center' gap={'xl'}>
                <Title order={1}>Site Timeline</Title>
                <Divider variant="solid" size={'xs'} w={'100%'}/>
                <SiteTimeline items={test}/>
            </Flex>
            </Card>
        </Flex>
    )
}

export default Timeline;