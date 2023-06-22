# Vita, 복약 지원 시스템

![](https://user-images.githubusercontent.com/63354527/223688245-e2886a02-9014-4c4c-9056-519b942e2f5a.png)

## 개요

Vita는 인공 지능 스피커를 활용해서 사용자의 복약을 지원해주는 간접 복약 지원 시스템을 설계하고 구현한 프로젝트이다. 정해진 시간이 되면 인공지능 스피커는 알림을 통해서 사용자에게 알림을 준다. 이 때 사용자는 알림을 받고 스피커와 상호작용을 하며 약을 먹었으면 먹었다고 말하고 약을 먹지 않으면 먹지 않은 이유를 말한다. 사용자의 음성은 텍스트로 바뀌어서 데이터베이스에 저장이되고 관리자는 사용자가 약을 잘 복용했는지, 먹지 않았으면 어떤 이유에서 먹지 않았는지에 대해 모니터링할 수 있는 시스템을 설계하였다.

[2023 HCI KOREA 학술대회 REUNION 발표](https://hcikorea.org/%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD/11493377)

## System Architecture

![](https://user-images.githubusercontent.com/63354527/223687258-8156db7d-5904-4b64-94d2-0b9aa704b42e.png)

- AI 스피커는 정해진 시간에 약을 먹었는지, 약을 먹지 않았다면 이유는 무엇인지 사용자와 상호작용한다.
- 관리자는 사용자가 복약을 적절하게 했는지 내역을 관리할 수 있으며 사용자가 약을 먹지 않으면 관리자에게 알림을 보낸다.

1. 약을 먹는 시간을 설정하여 알림을 통해 복약을 지원
2. 사회적 관계(관리자 ↔ 사용자) 기반 복약 지원
3. 초음파 센서를 통한 적시 개입(사람이 가까워지면 약을 복용하라고 알림)을 통한 복약 지원

## Sequence Diagram

**약을 먹은 경우**

<img width="965" alt="image" src="https://github.com/hyunjinee/linkgraph/assets/63354527/6ed9531f-2f2b-46bf-873a-cd5fadc21271">

**약을 먹지 않은 경우**

<img width="967" alt="image" src="https://github.com/hyunjinee/linkgraph/assets/63354527/63891896-8c44-4d4c-9736-abb4ea51df27">
