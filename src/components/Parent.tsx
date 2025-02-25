import { memo, useState } from 'react';

type FizzProps = {
  isFizz: boolean;
};

const Fizz = (props: FizzProps) => {
  const { isFizz } = props;
  console.log(`Fizzが再描画されました、isFizz=${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>;
};

type BuzzProps = {
  isBuzz: boolean
  onClick: () => void
}

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz, onClick } = props;
  console.log(`Buzzが再描画されました、isBuzz=${isBuzz}`)
  return <span onClick={onClick}>{isBuzz ? 'Buzz' : ''}</span>;
}
);

export const Parent = () => {
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  const onBuzzClick = () => {
    console.log(`Buzzがクリックされました isBuzz=${isBuzz}`)
  }

  console.log(`Parentが再描画されました、count=${count}`)
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Fizz isFizz={isFizz} />
      <Buzz isBuzz={isBuzz} onClick={onBuzzClick}/>
    </div>
  );
}
