<script lang="ts">
  import { Form, Field } from "../form/index";
  import { validateEmail, validateRequiredField } from "../utils/validation";
</script>

<Form
  on:submit={(e) => {
    console.log(e.detail);
  }}
  initalValues={{ username: "Test", email: "test@gmail.com" }}
  let:hasErrors
  let:values
  let:errors
>
  <Field name="username" label="username" type="text" validate={validateRequiredField}>
    <p class="text-green-600" slot="error" let:error>{error}</p>
  </Field>
  <Field
    name="email"
    label="email"
    type="email"
    validate={(value, label) => {
      return validateRequiredField(value, label) || validateEmail(value, label);
    }}
  />
  <Field name="password" label="password" type="password" validate={validateRequiredField} />
  <button class="btn btn-primary" type="submit" disabled={hasErrors}>Submit</button>
</Form>

<Form
  on:submit={(e) => {
    console.log(e.detail);
  }}
  let:hasErrors
>
  <Field name="username" label="username2" type="text" validate={validateRequiredField}>
    <p class="text-green-600" slot="error" let:error>{error}</p>
  </Field>
  <Field name="password" label="password" type="password" validate={validateRequiredField} />
  <button class="btn btn-primary" type="submit" disabled={hasErrors}>Submit</button>
</Form>
