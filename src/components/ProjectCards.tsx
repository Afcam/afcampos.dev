import {
  ActionIcon,
  Card,
  Group,
  HoverCard,
  Image,
  Indicator,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import bandsite from "../assets/bansite.png.png";

export default function ProjectCards() {
  return (
    <HoverCard
      width={280}
      shadow="md"
      arrowPosition="side"
      position="right-start"
      withArrow
      openDelay={200}
      closeDelay={400}
    >
      <HoverCard.Target>
        <Indicator label="New" size={16} maw="33%">
          <Card shadow="sm" radius="md" withBorder>
            <Card.Section>
              <Image src={bandsite} w="100%" alt="Norway" />
            </Card.Section>
            <Stack py="xs" spacing="xs">
              <Title order={5}>Bandsite</Title>
              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>
              <Group position="center">
                <Image
                  height="20px"
                  width={"auto"}
                  src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                  alt="JavaScript Badge"
                />
                <Image
                  height="20px"
                  width={"auto"}
                  src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                  alt="JavaScript Badge"
                />

                <Image
                  height="20px"
                  width={"auto"}
                  src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge"
                  alt="JavaScript Badge"
                />
                <Image
                  height="20px"
                  width={"auto"}
                  src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"
                  alt="JavaScript Badge"
                />
              </Group>
              <Group>
                <ActionIcon variant="subtle">
                  <IconBrandGithub size="1rem" />
                </ActionIcon>
                <ActionIcon variant="subtle">
                  <IconExternalLink size="1rem" />
                </ActionIcon>
              </Group>
            </Stack>
          </Card>
        </Indicator>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Title order={5}>Client:</Title>
        <Text>
          The client component of this project involves developing a band
          website that serves as an online platform for the band to connect with
          their fans and share their music and updates. The website will be
          built using CSS with SASS and HTML5, ensuring a visually appealing and
          responsive design. Through an engaging user interface, the client-side
          code will provide a seamless browsing experience for visitors,
          allowing them to explore the band's content and interact with various
          features.
        </Text>
        <Title order={5}>Server: </Title>
        <Text>
          The server-side of this project leverages an API deployed on Heroku to
          handle data retrieval and management. The API is designed to provide
          the necessary endpoints for fetching comments and show data
          dynamically. To facilitate communication between the client-side and
          server-side, the client code will utilize the Axios library for making
          HTTP requests to the API. Axios simplifies the process of sending
          requests and handling responses, enabling smooth integration of the
          server's live data into the website. By combining the client-side
          technologies of CSS with SASS and HTML5, along with the server-side
          API deployed on Heroku and the use of Axios for HTTP requests, this
          project ensures an efficient and robust implementation of the band
          website. The client-side design and server-side functionality will
          work harmoniously to create an engaging and interactive user
          experience.
        </Text>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
