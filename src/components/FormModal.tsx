
import "../styles/FormModal.css"

import emailjs from "@emailjs/browser";

import type { ReactElement } from "react";

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function FormModal({ open, onClose }: Props): ReactElement | null {

    if (!open) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await emailjs.sendForm(
                "service_p7cs0qj","template_jzbgwc7",
                e.currentTarget,
                "fQJeJI7H3qjwxvdFY"
            );

            onClose();
            alert("Message sent successfully!");
        } catch (error) {
            console.error("EmailJS error:", error);
            alert("Something went wrong. Please try again.");
        }
    };



    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <h2>Reach out</h2>
                <p className="body">Have a question, project idea, or just want to say hi? 
                    <br/>
                    I'd love to hear from you.    
                </p>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea name="message" placeholder="Message" required rows={5} />
                    <button type="submit">Send</button>
                </form>

            </div>
        </div>
    );

}
