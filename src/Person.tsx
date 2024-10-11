import React, { useState } from "react";

export interface Person{
    name:string;
    age:number;
    isMarried:boolean;

}

export const Person = (props: Person) =>{
    const[personBio,setPersonBio] = useState<string | null> (null) ;

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setPersonBio(event.target.value);
    };
    return (
      <div>
      
            <p>Name:{props.name}</p>
            <p>age:{props.age}</p>
            <p>this person{props.isMarried ? 'is married' : 'is single'}</p>
          
        
        <p> {props.name}  Bio: {!personBio ? "No Bio Availabe" : personBio}</p>

       <input  onChange={handleChange}/>
      </div>
    );
    
    
};
