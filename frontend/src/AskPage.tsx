import React from 'react';
import { Page } from './Page';
import { Form, required, minLength, between, Values } from './Form';
import { Field } from './Field';
import { postQuestion } from './QuestionsData';

export const AskPage = () => {
  const handleSubmit = async (values: Values) => {
    const question = await postQuestion({
      title: values.title,
      content: values.content,
      userName: 'Fred',
      created: new Date(),
    });
    return { success: question ? true : false };
  };
  return (
    <Page title="Ask a question">
      <Form
        submitCaption="Submit Your Question"
        validationRules={{
          title: [{ validator: required }, { validator: minLength, arg: 10 }],
          content: [{ validator: required }, { validator: minLength, arg: 50 }],
          number: [
            { validator: required },
            { validator: between, arg: 2, arg2: 10 },
          ],
        }}
        onSubmit={handleSubmit}
        failureMessage="There was a problem with your question"
        successMessage="Your question was successfully submitted"
      >
        <Field name="title" label="Title" />
        <Field name="number" label="Number" type="Number" />
        <Field name="content" label="Content" type="TextArea" />
      </Form>
    </Page>
  );
};

export default AskPage;
