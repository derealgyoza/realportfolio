import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        Tumen Nayad Khairkhan LLC <Badge>2022-</Badge>
      </Title>
      <P>
        Portfolio website of a small water Company base in Ulan=Bator.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, jS</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/tumen.jpg" alt="walknote" />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
