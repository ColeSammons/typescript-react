import React, { useRef, useState } from "react";

interface Person {
    firstName: string;
    lastName: string;
};

interface Props {
    text: string;
    ok?: boolean;
    id?: number;
    fn?: (bob: string) => string;
    obj?: { f1: string };
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

//FC stands for function component. Stating the type is component..
//identifying what props should be passed in with the interface.
export const TextField: React.FC<Props> = ({ handleChange }) => {
    //can define what type
    const [count, setCount] = useState<number | null | undefined>(5);
    setCount(undefined);


    const [letter, setLetter] = useState<{ text: string }>({ text: 'hello' });
    /////or
    interface TextNode {
        text: string;
    }
    const [letters, setLetters] = useState<TextNode>({ text: 'hello' });


    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={ handleChange} />
        </div>
    )
};
