"use client";
import {
  Form,
  IconButton,
  Icons,
  InputField,
  Row,
} from "@packages/common-components";
import { createUserSchema } from "@packages/common-types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  userName: "",
  code: "",
};

const resolver = zodResolver(createUserSchema);

export const UserProfileForm = () => {
  const { formState, register, handleSubmit } = useForm({ resolver });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <InputField
          size="lg"
          type="text"
          label="Phone"
          placeholder="(xx) xxxxx-xxxx"
          before={<Icons icon="phone" />}
          inputProps={register("phone")}
          error={formState.errors.phone?.message}
        />
        <InputField
          size="lg"
          type="text"
          label="Phone 2"
          placeholder="(xx) xxxxx-xxxx"
          before={<Icons icon="phone" />}
          inputProps={register("phone")}
          error={formState.errors.phone?.message}
        />
      </Row>
      <Row>
        <InputField
          size="lg"
          type="text"
          label="City"
          placeholder="San Francisco"
          before={<Icons icon="address" />}
          inputProps={register("addressCity")}
          error={formState.errors.addressCity?.message}
        />
        <InputField
          size="lg"
          type="text"
          label="Street"
          placeholder="Saint Artunes, 123"
          before={<Icons icon="address" />}
          inputProps={register("addressStreet")}
          error={formState.errors.addressStreet?.message}
        />
      </Row>
      <Row>
        <InputField
          size="lg"
          type="text"
          label="State"
          placeholder="California"
          before={<Icons icon="address" />}
          inputProps={register("addressState")}
          error={formState.errors.addressState?.message}
        />
        <InputField
          size="lg"
          type="text"
          label="Zip Code"
          placeholder="94103"
          before={<Icons icon="address" />}
          inputProps={register("addressZip")}
          error={formState.errors.addressZip?.message}
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
