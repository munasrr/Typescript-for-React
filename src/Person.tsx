
export const Person = ( props) =>{

    return (
      <div>
        <p>Name:{props.name}</p>
        <p>age:{props.age}</p>
        <p>this person:{props.isMarried ? 'is married' : 'is single'}</p>
      </div>
    );
    
};