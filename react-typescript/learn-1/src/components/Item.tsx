type ItemProps<T> = {
  id: number;
  title: string;
  extra: T[];
};

const Item = (props: ItemProps<object>) => {
  return (
    <div>
      <p>{props.id}</p>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Item;
