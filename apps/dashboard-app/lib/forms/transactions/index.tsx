import {
  Column,
  CurrencyInputField,
  Form,
  IconButton,
  Icons,
  InputField,
  MaskInputField,
  Row,
  Selector,
} from "@packages/daisy-ui-components";
import UserFormSchema from "@/lib/hooks/useFormSchema";
import { useClientTranslations } from "@/lib/hooks/useClientTranslation";
import { createTransactionSchema } from "@packages/common-types";

const TransactionsForm = () => {
  const { t } = useClientTranslations();
  const { errors, setValue, watchValue, register, handleSubmit } =
    UserFormSchema(createTransactionSchema);

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Column className="max-w-lg">
        <InputField
          type="text"
          label={t("forms.transactions.name")}
          placeholder="John Doe"
          before={<Icons icon="user" />}
          inputProps={register("name")}
          error={errors.name?.message?.toString()}
        />
        <InputField
          type="date"
          placeholder="dd/mm/yyyy"
          label={t("forms.transactions.date")}
          before={<Icons icon="calendar" />}
          inputProps={register("date")}
          error={errors.date?.message?.toString()}
        />
        <Selector
          label={t("forms.transactions.type")}
          defaultValue={watchValue("type")}
          onChange={(value) => setValue("type", value)}
          options={[
            { label: "Profit", value: "profit" },
            { label: "Revenue", value: "revenue" },
          ]}
          error={errors.type?.message?.toString()}
        />
        <CurrencyInputField
          type="number"
          placeholder="0.00"
          label={t("forms.transactions.value")}
          before={<Icons icon="dollar" />}
          inputProps={register("value")}
          error={errors.value?.message?.toString()}
        />
      </Column>
      <Row>
        <IconButton type="submit" icon="save" color="primary">
          Save
        </IconButton>
      </Row>
    </Form>
  );
};

export default TransactionsForm;
