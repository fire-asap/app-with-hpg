import React from 'react'; // how to make this not necessary ????
import { Icon, ThemeConfig, Tag, OverflowLine } from 'hpg-ui';

const LISTS = [
  {
    name: 'books',
    element: <Tag content="books" />,
  },
  {
    name: 'fruits',
    element: <Tag content="fruits" />,
  },
  {
    name: 'animals',
    element: <Tag content="animals" />,
  },
  {
    name: 'drinks',
    element: <Tag content="drinks" />,
  },
  {
    name: 'movies',
    element: <Tag content="movies" />,
  },
];

export default function App() {
  return (
    <div>
      <ThemeConfig>
        <Icon name="checkCircle" size="lg" color="warn" />
        <Icon name="checkLine" color="succ" />
        <Icon name="closeLine" color="error" />
        <Icon name="closeCircle" color="info" />
        <Icon name="angleDownLine" />
        <Icon name="angleLeftLine" />
        <Icon name="angleRightLine" />
        <Icon name="angleUpLine" />
        <br />
        <div style={{ width: '100%' }}>
          <OverflowLine items={LISTS} />
        </div>
      </ThemeConfig>
    </div>
  );
}
