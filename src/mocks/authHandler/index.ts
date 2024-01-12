// eslint-disable-next-line import/no-extraneous-dependencies
import { http, HttpResponse } from 'msw';

export const authHandlers = [
  /* ----- 회원가입 api ----- */
  http.post(`${process.env.NEXT_PUBLIC_BASE_URL}/member/join`, () => {
    return HttpResponse.json('회원가입 성공!!');
  }),
];
