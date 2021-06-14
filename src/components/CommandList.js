import CommandListItem from './CommandListItem';
import styled from 'styled-components'

function getOperatingSystem(window) {
  let operatingSystem = 'Not known';
  if (window.navigator.appVersion.indexOf('Win') !== -1) { operatingSystem = 'Windows OS'; }
  if (window.navigator.appVersion.indexOf('Mac') !== -1) { operatingSystem = 'MacOS'; }
  if (window.navigator.appVersion.indexOf('X11') !== -1) { operatingSystem = 'UNIX OS'; }
  if (window.navigator.appVersion.indexOf('Linux') !== -1) { operatingSystem = 'Linux OS'; }
  return operatingSystem;
}

const CommandList = (props) => {
  const os = getOperatingSystem(window)
  const listContent = props.commands.map((item) => {
    return <CommandListItem
      key={item.id}
      os={os}
      description={item.description}
      command={item.command}
    />
  })

  const ListContainer = styled.div`
    width: 600px;
    height: auto;
    background: #F6F6F6;
    border: 1px solid #ECEDF2;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 65%;
    left: 75%;
    transform: translate(-50%, -50%);
    padding: 30px;
    border-radius: 5px;
  `

  return (
    <div>
      <ListContainer>
        {listContent}
      </ListContainer>
    </div>
  )
}

export default CommandList 