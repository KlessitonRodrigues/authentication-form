"use client";
import {
  Form,
  IconButton,
  Icons,
  InputField,
  Row,
} from "@packages/daisy-ui-components";
import { createUserSchema } from "@packages/common-types";
import UserFormSchema from "@/lib/hooks/useFormSchema";
import { useClientTranslations } from "@/lib/hooks/useClientTranslation";

export const UserProfileForm = () => {
  const { t } = useClientTranslations();
  const { errors, register, handleSubmit } = UserFormSchema(createUserSchema);

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row responsive="md" flexY="start">
        <InputField
          size="lg"
          type="text"
          label={t("forms.users.phone")}
          placeholder="(xx) xxxxx-xxxx"
          before={<Icons icon="phone" />}
          inputProps={register("phone")}
          error={errors.phone?.message?.toString()}
        />
        <InputField
          size="lg"
          type="text"
          label={t("forms.users.phone2")}
          placeholder="(xx) xxxxx-xxxx"
          before={<Icons icon="phone" />}
          inputProps={register("phone2")}
          error={errors.phone2?.message?.toString()}
        />
      </Row>
      <Row responsive="md" flexY="start">
        <InputField
          size="lg"
          type="text"
          label={t("forms.users.city")}
          placeholder="San Francisco"
          before={<Icons icon="address" />}
          inputProps={register("addressCity")}
          error={errors.addressCity?.message?.toString()}
        />
        <InputField
          size="lg"
          type="text"
          label={t("forms.users.street")}
          placeholder="Saint Artunes, 123"
          before={<Icons icon="address" />}
          inputProps={register("addressStreet")}
          error={errors.addressStreet?.message?.toString()}
        />
      </Row>
      <Row responsive="md" flexY="start">
        <InputField
          size="lg"
          type="text"
          label={t("forms.users.state")}
          placeholder="California"
          before={<Icons icon="address" />}
          inputProps={register("addressState")}
          error={errors.addressState?.message?.toString()}
        />
        <InputField
          size="lg"
          type="text"
          label={t("forms.users.zipCode")}
          placeholder="94103"
          before={<Icons icon="address" />}
          inputProps={register("addressZip")}
          error={errors.addressZip?.message?.toString()}
        />
      </Row>

      <Row>
        <IconButton type="submit" icon="save" color="primary">
          {t("forms.users.saveBtn")}
        </IconButton>
      </Row>
    </Form>
  );
};
