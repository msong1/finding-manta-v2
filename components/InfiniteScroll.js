'use client'

import { useRef, useEffect } from "react";

function InfiniteScroll({ children }) {
  const container = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const fullHeight = container.current.offsetHeight; // infinite 클래스의 높이
      console.log(fullHeight);
      // const scrollPosition = pageYOffset; // 스크롤 위치
      // if (fullHeight - screenHeight / 2 <= scrollPosition && !oneTime) { // 만약 전체높이-화면높이/2가 스크롤포지션보다 작아진다면, 그리고 oneTime 변수가 거짓이라면
      //   oneTime = true; // oneTime 변수를 true로 변경해주고,
      //   callback(); // 컨텐츠를 추가하는 함수를 불러온다.
      }

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const pagination = document.querySelector(`.${container}`);
  // const fullContent = document.querySelector(`.${end}`); // 전체를 둘러싼 컨텐츠 정보획득
  // const screenHeight = screen.height; // 화면 크기
  // let oneTime = false; // 일회용 글로벌 변수

  // document.addEventListener('scroll', OnScroll, { passive: true }) // 스크롤 이벤트함수정의

  // function OnScroll() { //스크롤 이벤트 함수
  //   const fullHeight = fullContent.clientHeight; // infinite 클래스의 높이
  //   const scrollPosition = pageYOffset; // 스크롤 위치
  //   if (fullHeight - screenHeight / 2 <= scrollPosition && !oneTime) { // 만약 전체높이-화면높이/2가 스크롤포지션보다 작아진다면, 그리고 oneTime 변수가 거짓이라면
  //     oneTime = true; // oneTime 변수를 true로 변경해주고,
  //     callback(); // 컨텐츠를 추가하는 함수를 불러온다.
  //   }
  // }

  return (
    <div className="infinite-container" ref={container}>
      {children}
    </div>
  )
}

export default InfiniteScroll;