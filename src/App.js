import './App.css';
// import Lifecycle from './components/lifecycle';

import Heading from './Heading.js'
import Section from './Section.js'

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My profile</Heading>
      <Post title="My first post" body="This is my first post" />
      <AllPosts />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>帖子</Heading>
      <RecentPosts />
    </Section>
  )
}

function RecentPosts() {
  return (
    <Section>
      <Heading>最近的帖子</Heading>
      <Post title="里斯本的味道" body="那些蛋挞..." />
      <Post
        title="探戈节奏中的布宜诺斯艾利斯"
        body="我爱它！"
      />
    </Section>
  )
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </Section>
  )
}

