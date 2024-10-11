
interface Props {
  name: string;
  age: number;
  isMarried: boolean;
  country: Countries;
}

export enum Countries {
    Brazil = "brazil",
    somalia = "somali",
    UnitedStates = "UnitedStates",

}

export const User = (Props: Props) => {
  // const  handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault()
  // }
//   const {users,updateUser,deleteUser} = useContext(UserContext);
  return (
    <div>
      <p>Name:{Props.name}</p>
      <p>age:{Props.age}</p>
      <p>this person{Props.isMarried ? 'is married' : 'is single'}</p>
      <p>country of origin : {Props.country}</p>
    </div>
  );
};
