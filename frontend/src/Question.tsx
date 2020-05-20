/** @jsx jsx */ import { css, jsx } from '@emotion/core';
import { FC } from 'react';
import { QuestionData } from './QuestionsData';
import { gray3 } from './Styles';

interface Props {
  data: QuestionData;
}

export const Question: FC<Props> = ({ data }) => (
  <div
    css={css`
      padding: 10px 0px;
    `}
  >
    <div
      css={css`
        padding: 10px 0px;
        font-size: 19px;
      `}
    >
      {data.title}
    </div>
    <div
      css={css`
        font-size: 12px;
        font-style: italic;
        color: ${gray3};
      `}
    >
      {`Asked by ${
        data.userName
      } on ${data.created.toLocaleDateString()} ${data.created.toLocaleTimeString()}`}
    </div>
  </div>
);
