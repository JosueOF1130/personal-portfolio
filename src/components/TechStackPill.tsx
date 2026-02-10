import type { ReactElement } from "react";

interface Props {
    title: string;
    children: React.ReactNode;
}

export default function TechStackPill({ title, children }: Props): ReactElement {
    return (
        <div className="pill">  
            { children }
            <p className="sono body">{ title }</p>
        </div>
    );
}