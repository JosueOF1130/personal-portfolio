import { useState } from "react";

interface Props {
    title: string;
    children: React.ReactNode;
}

export default function Accordion({ title, children }: Props) {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={`accordion ${isOpen && "open"}`}>
            <button
                className="accordion-body"
                onClick={() => setIsOpen(!isOpen)}
            >
                
            <div className="accordion-header">
                <span>{title}</span>
                <span className="arrow" />
            </div>

            <div className="accordion-content">
                {children}
            </div>
            </button>
        </div>
    );
}