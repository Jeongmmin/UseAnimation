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
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      {/* <Box transition={{ duration: 3 }} animate={{ borderRadius: "100px" }} /> */}
      <Box initial={{scale: 0}} transition={{ type: "spring", delay: 0.8}} animate={{ scale: 1, rotateZ: 360 }} /> 
    </Wrapper>
  );
}

export default App;

// motion.XXX 이렇게 써야 적용된다.

// animate 된 스타일 컴포넌트를 가지는 방법
/**
 *const Box = styled(motion.div)``; 이렇게 쓰면 된다.
 *
 * initial={{scale: 0}}
 * transition={{ type: "spring"}} 기본
 * stiffness:10 뻣뻣하게해줌
 * damping:30 반동(bounce) / 0이면 계속 움직임
 * 
 */
