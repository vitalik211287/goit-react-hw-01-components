import PaintingList from '../components/PaintingList';
import paintings from '../paintings.json';
import Section from './Section';

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
      <Section />
      {/* <PaintingList items={paintings} /> */}
    </div>
  );
}
