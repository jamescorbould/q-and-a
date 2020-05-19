/** @jsx jsx */ import { css, jsx } from '@emotion/core';
import { FC } from 'react';
import { gray5, accent2 } from './Styles';
import { QuestionData } from './QuestionsData';

interface Props {
  data: QuestionData[];
}

export const QuestionList: FC<Props> = (props) => (
  <ul
    css={css`
      list-style: none;
      margin: 10px 0 0 0;
      padding: 0px 20px;
      background-color: #fff;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 3px solid ${accent2};
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
    `}
  >
    {props.data.map((question) => (
      <li
        key={question.questionId}
        css={css`
          border-top: 1px solid ${gray5};
          :first-of-type {
            border-top: none;
          }
        `}
      ></li>
    ))}
  </ul>
);
