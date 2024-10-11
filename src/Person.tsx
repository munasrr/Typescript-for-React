export interface Person{
    name:string;
    age:number;
    isMarried:boolean;

}


export const Person = ( props:Person) =>{

    return (
      <div>
        <p>Name:{props.name}</p>
        <p>age:{props.age}</p>
        <p>this person{props.isMarried ? 'is married' : 'is single'}</p>
      </div>
    );
    
};