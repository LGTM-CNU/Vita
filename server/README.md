# Vita Server

AI 스피커의 API 요청에 대한 응답을 처리하는 서버입니다.

- 데이터베이스에 회원 가입된 유저를 미리 넣어 놓을 것이다.
- 로그인 했을 때 세션 유지가 필요
- DB 설계

```shell
nest g controller todo/controller/todo --flat
nest g service todo/service/todo --flat
nest g resource posts
npx prisma db seed
```
