/* 사회복지 업무 도구 목록 — 이 파일 하나만 고치면 카드와 3D 사무실이 함께 바뀜.
   (자활 도구 모음 https://jahwalktg.github.io/ 의 틀을 복사해 쓴 것. 변수 이름 JAHWAL_TOOLS는 틀 그대로 둠)
   새 도구 넣는 법 (README.md에도 있음)
   1) 아래 목록 끝에 { … } 하나를 복사해 붙이고 글·주소를 바꾼다.
   2) spot(3D 사무실의 물건): desk 책상 · shelf 책장 · table 상담 탁자 · board 칠판 · counter 안내 데스크 · kiosk 세움 화면(새 도구 기본)
   3) pic: img/ 안의 굿균 그림 이름(없으면 hello). tags: work 매일 업무 · doc 문서·AI · rule 지침·제도 · new 처음
   4) navLabel: 3D 화면 아래 번호 단추에 쓸 짧은 이름(없으면 short의 첫 낱말)
   5) 사무실 자리는 들어온 순서대로 자동 배치(최대 8개). 순서를 바꾸면 자리도 바뀜. */
window.JAHWAL_TOOLS = [
  {
    id: 'tools', title: '사회복지사 업무 도구', short: '업무 도구', sub: '실무자 도구 모음', who: '실무자',
    desc: '문서·명단·홍보·사무·안전·시간 도구를 한 화면에서 골라 써요. 설치도 로그인도 없어요.',
    feats: ['인수인계서·업무분장표', '명단 대조', '개인정보 가리기', '수료증·이름표', '주소 라벨', 'PDF 나누기', '소식지·보도자료'],
    links: [{ label: '열어 보기', url: 'https://jahwalktg.github.io/welfare-tools/' }],
    tags: ['work'], color: '#1A6EFF', pic: 'tools', spot: 'desk', navLabel: '업무'
  },
  {
    id: 'ai', title: 'AI 주문서 — 우리 기관 스타일로', short: 'AI 주문서', sub: '챗GPT·제미나이에 붙이는 글', who: '문서를 쓰는 실무자',
    desc: '우리 기관 틀과 말투를 담은 스타일 카드를 만들어 두면, 받은 양식 채우기·작년 문서 고치기·메모를 문서로 바꾸는 주문서가 우리 기관 방식으로 나와요.',
    feats: ['우리 기관 스타일 카드', '문서 만들기·바꾸기', '쉬운 안내문', '회의록·공문', '개인정보 가리기', 'hwpx 글 꺼내기'],
    note: 'AI를 대신 불러 주지 않아요. 붙여 넣을 글(주문서)을 만들어 주고, 넣은 글은 어디에도 보내지 않아요.',
    links: [{ label: '스타일 카드 만들기', url: 'https://jahwalktg.github.io/welfare-tools/style-card/' }, { label: '문서 바꾸기', url: 'https://jahwalktg.github.io/welfare-tools/doc-remake/' }],
    tags: ['work', 'doc'], color: '#D2366B', pic: 'guide', spot: 'kiosk', navLabel: 'AI 주문서'
  },
  {
    id: 'search', title: '사회복지 지침 찾기', short: '지침 찾기', sub: '낱말 하나로 지침 원문을', who: '실무자 · 지침 확인',
    desc: '2026년 사회복지시설 관리안내·사회복지관 업무처리 안내·서울시 종사자 처우개선 계획 본문을 낱말로 바로 찾아요.',
    feats: ['쪽수 표시', '근거 복사', '「작년엔 뭐였지」 2025년과 비교', '원문 그대로 보기'],
    note: 'AI가 답을 지어내지 않아요. 지침 글자를 그대로 찾아 보여 줘요.',
    links: [{ label: '열어 보기', url: 'https://jahwalktg.github.io/welfare-search/' }],
    tags: ['work', 'rule'], color: '#0F8A6C', pic: 'search', spot: 'shelf', navLabel: '지침'
  },
  {
    id: 'basic', title: '국기초 가늠표 (복지 현장판)', short: '국기초 가늠표', sub: '수급을 이용자 상황으로 가늠', who: '상담 · 사례관리',
    desc: '이용자 상황을 넣어 국민기초생활보장의 소득인정액과 생계·의료·주거·교육급여 자리를 한 장으로 가늠해 봐요.',
    feats: ['숫자마다 사업안내 쪽수', '소득·가구원 바꿔 보기', '가상 사례 5건', '저장 없음'],
    note: '판정하지 않아요. 확정은 시·군·구 담당자가 해요.',
    links: [{ label: '열어 보기', url: 'https://jahwalktg.github.io/welfare-tools/basic/' }],
    tags: ['rule'], color: '#C2601F', pic: 'gukgicho', spot: 'table', navLabel: '가늠표'
  },
  {
    id: 'guide', title: '신입 안내서', short: '신입 안내서', sub: '첫 달에 듣게 될 말', who: '신입 실무자',
    desc: '첫 달에 듣게 될 낱말을 쉬운 말과 근거 쪽수로 풀고, 지출·예산·결산·보조금·후원금·채용 같은 업무 절차를 순서대로 보여 줘요.',
    feats: ['낱말 114개', '업무 절차 11개', '한 해 달력', '처음 한 달 체크'],
    note: '세무·4대보험처럼 현장 검토 전인 것은 「검토 중」으로 표시했어요.',
    links: [{ label: '열어 보기', url: 'https://jahwalktg.github.io/welfare-tools/guide/' }],
    tags: ['new'], color: '#7B4BD6', pic: 'start', spot: 'board', navLabel: '신입'
  }
];
