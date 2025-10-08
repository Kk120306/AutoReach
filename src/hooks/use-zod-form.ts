'use client'

import { UseMutateFunction } from "@tanstack/react-query";
import { useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const useZodForm = <
    TSchema extends z.ZodType<any, any, any>
>(
    schema: TSchema,
    mutation: UseMutateFunction<any, Error, z.infer<TSchema>, unknown>,
    defaultValues?: Partial<z.infer<TSchema>>
) => {
    type FormValues = z.infer<TSchema>;

    const { register, formState: { errors },
        handleSubmit, watch, reset
    }
        = useForm<FormValues>({
            resolver: zodResolver(schema) as any,
            defaultValues: {
                ...defaultValues
            } as any
        });

    const onFormSubmit = handleSubmit(async (values) => {
        mutation({ ...values })
    })

    return {
        register,
        errors,
        onFormSubmit,
        watch,
        reset
    }
};


export default useZodForm;