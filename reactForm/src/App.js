import React from "react";
import { useForm ,Control} from "react-hook-form";

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
        <input type="email" {...register("email")}
            errors={"ajaykumar verma"}       
 

        />
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
     

         <input
  type="number"
  {...register('test', {
    max: {
      value: 10,
      message: 'test' // JS only: <p>error message</p> TS only support string
    }
  })}
/>
{/* this  is how we can set erro and show error */}
{errors?.test && errors?.test.message}

<br/>


<input
  {...register("test1", {
      maxLength : {
        value: 2,
        message: 'test1' // JS only: <p>error message</p> TS only support string
      }
  })}
/>
{errors?.test1 && errors?.test1?.message}


<br/>

<input
  {...register("pat", {
    pattern: {
      value: /[A-Za-z]{3}/,
      message: 'pat' // JS only: <p>error message</p> TS only support string
    }
  })}
/>
{errors?.pat && errors?.pat?.message}
<br/>

<input
  {...register("valid", {
    validate: value => value === '1' || 'valid'  // JS only: <p>error message</p> TS only support string
  })}
/>
<br />
<input
  {...register("valid1", {
    validate: {
      positive: v => parseInt(v) > 0 || 'should be greater than 0',
      lessThanTen: v => parseInt(v) < 10 || 'should be lower than 10',
      // you can do asynchronous validation as well
      checkUrl: async () => await fetch() || 'valid1',  // JS only: <p>error message</p> TS only support string
      messages: v => !v && ['valid', 'valid1']
    }
  })}
/>
{errors?.valid1 && errors?.valid1?.message}

<br/>
<input
  {...register("dbtn", {
    disabled: true
  })}
/>
{errors?.dbtn && errors?.dbtn?.message}
<br/>



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