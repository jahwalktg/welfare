# 사회복지 업무 도구 모음 (안내 페이지)

사회복지사 업무 도구 · AI 주문서 · 사회복지 지침 찾기 · 국기초 가늠표(복지 현장판) · 신입 안내서를 한 주소로 안내하는 페이지.
자활 도구 모음(https://jahwalktg.github.io/)의 틀을 복사해 글과 목록만 바꿨다(2026-11-11). 그쪽 원본은 고치지 않는다.

## 파일
- `index.html` — 화면(카드는 tools.js로 그림)
- `tools.js` — **도구 목록. 새 도구는 여기에만 넣으면 카드·3D 사무실·번호 단추·개수 글자가 함께 바뀜**
- `office3d.js` — 3D 사무실(three.js r128, cdnjs). WebGL이 안 되면 카드만 보임
- `img/*.webp` — 3D 굿균 그림(자활 도구 모음 것 그대로): hello·walk·tools·search·gukgicho·start·guide

## 새 도구 넣는 법
`tools.js` 머리말 참고. tags: work 매일 업무 · doc 문서·AI · rule 지침·제도 · new 처음.

## 확인하는 법
`python -m http.server 8770` 뒤 http://127.0.0.1:8770/ (파일로 바로 열면 그림을 못 읽음)
