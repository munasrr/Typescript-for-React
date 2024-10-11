interface Props {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (Props: Props) => {
  // const  handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault()
  // }
  return (
    <div>
      <p>Name:{Props.name}</p>
      <p>age:{Props.age}</p>
      <p>this person{Props.isMarried ? 'is married' : 'is single'}</p>
    </div>
  );
};
