import * as React from "react";
import { useForm } from "react-hook-form";

export default function UseForms() {
  
  
  const { register, handleSubmit } = useForm({
  // in defaultValues we can set defafault value in begninning 
    defaultValues: {
      firstName: 'ajay',
      lastName: 'kumar',
      category: '1',
      checkbox: ["A"],
      radio: ''
    }
  });


  return (
    <form onSubmit={handleSubmit(console.table)}>
      <input {...register("firstName", { required: true })} placeholder="First name" />
            <br/>
      <input {...register("lastName", { minLength: 2 })} placeholder="Last name" />
    <br/>
      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Category A</option>
        <option value="B">Category B</option>
      </select>
      
      <br/>
      <input {...register("checkbox")} type="checkbox" value="A" />
      <input {...register("checkbox")} type="checkbox" value="B" />
      <input {...register("checkbox")} type="checkbox" value="C" />
      <br/>
      <input {...register("radio")} type="radio" value="A" />
      <input {...register("radio")} type="radio" value="B" />
      <input {...register("radio")} type="radio" value="C" />
   <br/>
      <input type="submit" />
    </form>
  );
}


