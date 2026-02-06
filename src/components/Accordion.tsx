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
                    <span>{title}</span>
                    <span className="arrow" />
                </div>

                <div className="accordion-content"
                    ref={contentRef}
                    style={{
                        maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
                        opacity: isOpen ? 1 : 0,
                    }}
                >
                    {children}
                </div>
            </button>
        </div>
    );
}