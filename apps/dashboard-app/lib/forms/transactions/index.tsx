import {
  Form,
  IconButton,
  Icons,
  InputField,
  Row,
} from "@packages/common-components";
import UserFormSchema from "@/lib/hooks/useFormSchema";
import { useClientTranslations } from "@/lib/hooks/useClientTranslation";
import { createTransactionSchema } from "@packages/common-types";

const TransactionsForm = () => {
  const { t } = useClientTranslations();
  const { errors, register, handleSubmit } = UserFormSchema(
    createTransactionSchema,
  );

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row responsive="md" flexY="start">
        <InputField
          size="lg"
          type="text"
          label={t("forms.transactions.name")}
          placeholder="John Doe"
          before={<Icons icon="user" />}
          inputProps={register("name")}
          error={errors.name?.message?.toString()}
        />
        <InputField
          size="lg"
          type="number"
          label={t("forms.transactions.date")}
          before={<Icons icon="calendar" />}
          inputProps={register("date")}
          error={errors.date?.message?.toString()}
        />
      </Row>
      <Row responsive="md" flexY="start">
        <InputField
          size="lg"
          placeholder="Profit"
          label={t("forms.transactions.type")}
          before={<Icons icon="dollar" />}
          inputProps={register("type")}
          error={errors.type?.message?.toString()}
        />
        <InputField
          size="lg"
          type="number"
          placeholder="0.00"
          label={t("forms.transactions.value")}
          before={<Icons icon="dollar" />}
          inputProps={register("value", { valueAsNumber: true })}
          error={errors.value?.message?.toString()}
        />
      </Row>
      <Row>
        <IconButton type="submit" icon="save" color="primary">
          Save
        </IconButton>
      </Row>
    </Form>
  );
};

export default TransactionsForm;
