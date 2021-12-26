import styled from 'styled-components';

export const Container = styled.div`


  .ServiceOne {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 1rem;
  ${'' /* opacity: 0; */}
  visibility: ${({ active1 }) => active1 ? "visible" : "hidden"};
  transition: 0.3s;
} 
  .ServiceTwo {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-modal);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 1rem;
  ${'' /* opacity: 0; */}
  visibility: ${({ active2 }) => active2 ? "visible" : "hidden"};
  transition: 0.3s;
} 
`