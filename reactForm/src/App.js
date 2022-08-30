import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {register,watch, setValue, handleSubmit, formState: { errors } } = useForm();

  
  // if filed is fine or validated 
  const onSubmit = (data) => {
  //  data has Object having all collection
    console.log("Form data ",data);
   };


// If error this below function wwill execute 
 const onError=(erro,e)=>{
console.log("Error ",erro,e);
  }

  // console.log("Form data",watch());

  return (
    <>
      <p className="title">Registration Form</p>

      <form className="App" onSubmit={handleSubmit(onSubmit,onError)}>
         <input type="text" {...register("name")} />
        <br/>
        <input type="email" {...register( "email" , {required: "Enter valid email " })  } />
        {errors.email && <span style={{ color: "red" }}>
           {JSON.stringify(errors.email.message)}
           </span>
        }
           <br/>

 
 

  {/* {console.log("Errors",errors)} */}


  {
  /* {
    !true || ( console.log("Ajay kumar verma "))
  }
  {
    false && ( console.log("Ajay kumar verma "))  
  }
    */
  }
   
     <input type="password" {...register("password")} />
         <br/>
     
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} 
        
         onClick={()=>{
             setValue("name","vaa");
             
          }
         }
        />
      </form>
    </>
  );
}
export default App;