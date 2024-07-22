import {
  useForm,
  FormProvider as ReactHookFormProvider,
  FieldValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type FormProviderProps<FormData extends FieldValues> = {
  children: React.ReactNode;
  schema: z.ZodType<FormData>;
  onSubmit: (data: FormData) => Promise<Response>;
};

function FormProvider<FormData extends FieldValues>({
  children,
  schema,
  onSubmit,
}: FormProviderProps<FormData>) {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <ReactHookFormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </ReactHookFormProvider>
  );
}

export default FormProvider;
