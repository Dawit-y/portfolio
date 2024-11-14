import { useRef, useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { z, ZodIssue } from "zod";

// Define the Zod schema for validation
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

// Define TypeScript types based on Zod schema
type FormState = z.infer<typeof formSchema>;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm: FormState) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate form data using the Zod schema
    const result = formSchema.safeParse(form);
    if (!result.success) {
      // Map Zod errors to the errors state
      const fieldErrors: Partial<FormState> = {};
      result.error.errors.forEach((error: ZodIssue) => {
        fieldErrors[error.path[0] as keyof FormState] = error.message;
      });
      setErrors(fieldErrors);
      return; // Stop the function if validation fails
    }

    setErrors({});
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Dawit",
          to_email: "dawityimer52@gmail.com",
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-14 flex flex-col items-center justify-center"
    >
      <h1 className="heading mb-10">
        Let&apos;s discuss how I can help
        <span className="text-purple">{" you achieve your goals."}</span>
      </h1>
      <div className="flex flex-col w-full md:w-3/4">
        <div className="bg-black-100 p-8 rounded-2xl">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium z-30"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium z-30"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="bg-primary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium z-30"
              />
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </label>
            <MagicButton
              title={`${loading ? "Sending..." : "Send"}`}
              icon={<FaLocationArrow />}
              position="right"
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
