import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './DynamicForm.module.css';


const DynamicForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    const firstName = watch("firstName");
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label>First Name</label>
          <input 
            {...register("firstName", { required: true, minLength: 3 })} 
            className={styles.input}
          />
          {errors.firstName && <span className={styles.error}>First name is required and should be at least 3 characters long</span>}
        </div>
  
        {firstName?.length >= 3 && (
          <div className={styles.formGroup}>
            <label>Last Name</label>
            <input 
              {...register("lastName", { required: true })} 
              className={styles.input}
            />
            {errors.lastName && <span className={styles.error}>Last name is required</span>}
          </div>
        )}
  
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    );
  }
  
  export default DynamicForm;