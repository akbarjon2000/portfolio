import styled from "styled-components";

export const Container = styled.div`
.skills__list {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  row-gap: 10px;
  padding-left: 2.7rem;
  column-gap: 10px;
}

`
export const Skills = styled.div`
 .skills__arrow {
  transform: ${({ show }) => show && "rotate(-180deg)"} 
}

 .skills__list {
  display: ${({ show }) => show ? "flex" : "none"} 
}

`