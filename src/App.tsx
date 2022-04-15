import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: whitesmoke;
  place-self: center; //이 것에 대해 알아보기
  height: 70px;
  width: 70px;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BoxVars = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const circleVars = {
  start: { opacity: 0, y: 10 },
  end: { opacity: 1, y: 0 },
};

function App() {
  return (
    <Wrapper>
      <Box variants={BoxVars} initial="start" animate="end">
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
        <Circle variants={circleVars} />
      </Box>
    </Wrapper>
  );
}

export default App;

/**
 * 자식에게 자동으로 값이 들어간다 <div className="initial="start" animate="end""></div>
 * 부모의 시작, 종료 가 자동으로 복사되니까 start end 안 써도 된다.
 *
 * 자식들에게 delay를 줄 수 있다. - delayChildren 사용
 * staggerChildren - delay 순차적으로 주는 것
 * 
 * 대부분의 요소는 CSS와 동일, x, y는 모션에만 있는 것!
 */
