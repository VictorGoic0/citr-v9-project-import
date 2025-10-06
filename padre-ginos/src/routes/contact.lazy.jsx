import { useMutation } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'
import postContact from "../api/postContact"
// import { useFormStatus } from "react-dom"; // note react-dom, not react
// ^ react 19 change that can be used

export const Route = createLazyFileRoute('/contact')({
  component: ContactRoute,
})

export function ContactRoute() {
  const mutation = useMutation({
    mutationFn: function(formData) {
      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message")
      )
    }
  })

  // const { pending } = useFormStatus(); <--- useFormStatus will give you access to status of form

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) :
      mutation.isError ? (
        <h3>Error!</h3>
      ) :
      (
        <form action={mutation.mutate}>
          <input name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea placeholder="Message" name="message" required ></textarea>
          <button>Submit</button>
        </form>
      )}
    </div>
  )

}