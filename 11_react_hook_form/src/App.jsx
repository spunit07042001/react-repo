
import './App.css'
import { useForm } from "react-hook-form";


function App() {
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  async function onSubmit(data) {
    // API call ko simulate krte h 
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submiting the form ", data);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">First Name</label>
          <input
            className={errors.firstName ? 'input-error' : ''}
            {...register("firstName", { required: true, minLength: 3, maxLength: 20 })} />
          {errors.firstName && <p>First name is required.</p>}
        </div>
        <br />
        <div>
          <label htmlFor="">Middle Name</label>
          <input {...register("MiddleName")} />
        </div>
        <br />
        <div>
          <label htmlFor="">Last Name</label>
          <input {...register("LastName", { pattern: /^[A-Za-z]+$/i })} />
          {errors.LastName && <p>Only alphabets are allowed.</p>}
        </div>
        <br />
        <input type="submit" disabled={isSubmitting} value={isSubmitting  ? "submitting" : "Submit"}/>
      </form>
    </>
  )
}

export default App
