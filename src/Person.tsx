interface pros {
  name: string;
  age: number;
  isMarried: boolean;
}

export const Person = (props: props) => {
  // const  handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault()
  // }
  return (
    <div>
      <p>Name:{props.name}</p>
      <p>age:{props.age}</p>
      <p>this person{props.isMarried ? 'is married' : 'is single'}</p>
    </div>
  );
};
