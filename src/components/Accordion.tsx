import { useRef, useState } from "react";

interface Props {
    title: string;
    children: React.ReactNode;
}

export default function Accordion({ title, children }: Props) {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);
    return (
        <div className={`accordion ${isOpen && "open"}`}>
            <button
                className="accordion-body"
                onClick={() => setIsOpen(!isOpen)}
            >

                <div className="accordion-header">
                    <h3>{title}</h3>
                    <span className="arrow" />
                </div>

                <div className="accordion-content"
                    ref={contentRef}
                    style={{
                        maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
                        
                    }}
                >
                    {children}
                </div>
            </button>
        </div>
    );
}