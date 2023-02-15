/* eslint-disable react/display-name */
import React, { ForwardedRef } from "react";
import { Field } from "formik"

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name:string;
    suffixIcon?: JSX.Element;
    prefixIcon?: JSX.Element;
    error?: boolean;
    classNames?: {
        root?: string;
        input?: string;
    };
}

/**
 *
 * @param {Object} - Inputprops
 * @return {JsxElement}
 */
const Input=(
{ error, className, classNames, prefixIcon, suffixIcon, ...rest }: IInputProps
    ) => {
        return (
            <div
                className={`px-2 md:px-4  flex items-center border border-neutral h-12 md:h-11 rounded${
                    error ? "border border-red-100" : ""
                } ${className} ${classNames?.root}`}
            >
                <input className="w-full input bg-transparent border-none focus:outline-none" />
            </div>

        );
    }

export default Input;
