import { useState } from "react";

export interface Person{
    name:string;
    age:number;
    isMarried:boolean;

}


export const Person = ( props:Person) =>{


    const [isShowInfo,setShowInfo] = useState<boolean>(false);

    const toggleInfo = () =>{
        setShowInfo((prev) => !prev);
    };

    return (
      <div>
        {isShowInfo && (
          <>
            <p>Name:{props.name}</p>
            <p>age:{props.age}</p>
            <p>this person{props.isMarried ? 'is married' : 'is single'}</p>
          </>
        )}
        <button onClick={toggleInfo}> Toggle Info</button>
      </div>
    );
    
};