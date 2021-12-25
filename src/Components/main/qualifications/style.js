import styled from "styled-components";

export const Container = styled.div`

.education{
    display:${({ active }) => active ? "block" : "none"};
}
.work{
    display:${({ active }) => active ? "none" : "block"}
}

`