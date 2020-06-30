import React from 'react';
import { Page } from './Page';
import { Form, required, minLength } from './Form';
import { Field } from './Field';

export const AskPage = () => (
  <Page title="Ask a question">
    <Form
      submitCaption="Submit Your Question"
      validationRules={{
        title: [{ validator: required }, { validator: minLength, arg: 10 }],
        content: [{ validator: required }, { validator: minLength, arg: 50 }],
      }}
    >
      <Field name="title" label="Title" />
      <Field name="content" label="Content" type="TextArea" />
    </Form>
  </Page>
);

export default AskPage;
