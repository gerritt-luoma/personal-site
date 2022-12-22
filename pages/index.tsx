import { Blockquote, Card, Flex, Timeline, Title, Text, Divider } from "@mantine/core";
import { IconBulb, IconPlus, IconExclamationMark, IconStack, IconTimeline, IconAlertTriangle } from "@tabler/icons"

export default function Home() {
  return (
    <>
      <Flex direction={'column'} align='center' justify={'center'} gap={'xl'} mx={200}>
        <Title order={1} size={'3rem'}>Welcome to my site!</Title>
        <Card shadow={'sm'} radius={'lg'} miw={'75%'}>
          <Blockquote
            cite={"- Unknown"}
            icon={<IconBulb/>}
            color={"pink.6"}
          >
            Success is stumbling from failure to failure with no loss of enthusiasm.
          </Blockquote>
        </Card>

        <Card shadow={'sm'} radius={'lg'} w={'75%'}>
          <Flex align={'center'} direction={'column'} gap={'xl'}>
            <Title order={2}>Site Timeline</Title>
            <Divider variant="solid" size={'xs'} w={'100%'}/>
            <Timeline bulletSize={20} lineWidth={2} color={'pink.6'} m={'auto'} active={3}>
              <Timeline.Item bullet={<IconPlus size={16}/>} title={'Repository Created'}>
                <Text color="dimmed" size='xs'>Respository was created on:<Text color={'pink.6'}>December 8, 2022</Text></Text>
              </Timeline.Item>
              <Timeline.Item bullet={<IconExclamationMark size={16}/>} title={'First Failure'}>
                <Text color="dimmed" size='xs'>I decided not to do everything by hand on:<Text color={'pink.6'}>December 16, 2022</Text></Text>
              </Timeline.Item>
              <Timeline.Item bullet={<IconStack size={16}/>} title={'New Stack Determined'}>
                <Text color="dimmed" size='xs'>I determined my stack on:<Text color={'pink.6'}>December 22, 2022</Text></Text>
              </Timeline.Item>
              <Timeline.Item bullet={<IconTimeline size={16}/>} title={'Timeline created'}>
                <Text color="dimmed" size='xs'>This super neat timeline was made on:<Text color={'pink.6'}>December 22, 2022</Text></Text>
              </Timeline.Item>
              <Timeline.Item bullet={<IconAlertTriangle size={16}/>} title={'Timeline was handled better'}>
                <Text color="dimmed" size='xs'>Items for this timeline were handled better on:<Text color={'pink.6'}>TBD</Text></Text>
              </Timeline.Item>
            </Timeline>
          </Flex>
        </Card>
      </Flex>
    </>
  );
}
