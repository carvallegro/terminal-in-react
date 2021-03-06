import styled from 'styled-components';

export const Container = styled.div`
 display: block;
 margin: 0 auto;
`;

export const ContainerMain = Container.extend`
  max-width: 600px;
  transition: all 0.4s ease-out;
  background: ${props => props.theme.backgroundColor};
  max-height: 600px;
  height: 100%;
  overflow: scroll;
  position: relative;

  &:focus {
    outline: none;
  }
`;

const outputLineStyle = `
  font-family: 'Inconsolata', monospace;
  font-size: 0.9em;
  color: green; 
  margin-top: 10px;
  margin-bottom: 10px;
  white-space: pre-wrap;
`;
export const OutputLine = styled.div`${outputLineStyle}`;
export const PreOutputLine = styled.pre`${outputLineStyle}`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Prompt = styled.span`
  color: ${props => props.theme.prompt};
`;

export const MainInput = styled.input `
  font: inherit;
  font-size: 0.9em;
  &, &:focus{
    border: none;
    padding: 0;
    margin: 3px;
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    flex: 1;
    outline: none;
   }
`;

export const Holder = styled.div`
`;

export const ContainerContent = styled.div`
  padding: 5px 20px;
  height: 100%;
`;

export const InputArea = styled.div`
  height: 100%;
  padding: 3px;
`;

