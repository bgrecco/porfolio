import Button from "./Button";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import ContactInfo from "./ContactInfo";
import { contactInfo } from "../_constants";

export default function ContactForm() {
  return (
    <div className="flex flex-col lg:flex-row ">
      <div className="flex flex-col flex-[1] max-w-screen-sm gap-6 justify-center my-2 mr-2">
        <div className="flex gap-6">
          <FormInput
            className="flex-1"
            placeholder="Firstname"
            ariaLabel="Firstname"
          />
          <FormInput
            className="flex-1"
            placeholder="Lastname"
            ariaLabel="Lastname"
          />
        </div>
        <FormInput placeholder="Email" ariaLabel="Email" type="email" />
        <FormTextArea maxLength={300} placeholder="Type your message here" />
        <Button variant="outlined">Send message</Button>
      </div>
      <div className="hidden lg:flex flex-col flex-[1] bg-border justify-evenly ">
        <div className="flex flex-col mx-auto gap-16">
          {contactInfo.map((item) => (
            <ContactInfo
              key={item.id}
              label={item.label}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
