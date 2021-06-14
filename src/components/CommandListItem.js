import styled from 'styled-components';

const CommandListItem = (props) => {
  let command = props.command
  if (props.os !== 'MacOS') {
    command = props.command.replace("CMD", "Alt");
  }

  const CommandListItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    border: 10px solid rgba(255,255,255,.5);
  `

  const CommandLabel = styled.label`
    margin-right: 60px;
    width: 20%;
  `

  const CommandDescription = styled.div`
    text-align: left;
    width: 80%;
  `

  return (
    <div>
      <CommandListItemContainer>
        <CommandLabel>{command}</CommandLabel>
        <CommandDescription>{props.description}</CommandDescription>
      </CommandListItemContainer>
    </div>
  )
}

export default CommandListItem 