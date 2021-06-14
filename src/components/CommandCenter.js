import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import bxQuestionMark from '@iconify/icons-bx/bx-question-mark';
import styled from 'styled-components'
import CommandList from './CommandList';

const INITIAL_COMMANDS = [
  { id: 1, description: 'Open the command pallete', command: 'CMD + K' },
  { id: 2, description: 'Go up and down the list', command: 'J or K' },
  { id: 3, description: 'When ticket is open, focus the response field', command: 'Enter' },
  { id: 4, description: 'Submit ticket response. (choose status)', command: 'CMD + Enter' },
  { id: 5, description: 'Exit/unfocus', command: 'Esc' },
  { id: 6, description: 'Change ticket', command: 'CMD + Arrow' }
]

const CommandCenter = () => {
  const [commandClicked, setCommandClicked] = useState(false)

  const commandClickHandler = (event) => {
    setCommandClicked((prevState) => { return !prevState })
    console.log(commandClicked)
  }

  const CommandButton = styled.div`
    position: absolute;
    right: 100px;
    bottom: 100px;
    border-radius: 50%;
    border: 1px solid #F6F6F6;
    background-color: #F6F6F6;
    height: 40px;
    width: 40px;
    text-align: center;
    position: fixed;

  `
  const CommandHolder = styled.div`
    position: relative;
    width: 100%;
    min-height: 530px;
    margin: auto;
  `

  return (
    <CommandHolder>
      {commandClicked && <CommandList commands={INITIAL_COMMANDS} />}
      <CommandButton onClick={commandClickHandler}>
        <Icon icon={bxQuestionMark} style={{ color: '#928a8a', fontSize: '35px' }} />
      </CommandButton>
    </CommandHolder>
  )
}

export default CommandCenter